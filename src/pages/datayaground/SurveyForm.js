import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import './SurveyForm.css';
import geoData from '../../data/kenya-geo.json'; 


const counties = Object.keys(geoData).sort(); // Get sorted list of counties from the data

const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '', 
    county: '', 
    constituency: '', 
    ward: '',      
    age: '', 
    parentalPermission: '', parentParticipating: '', isParent: '', dependents: '', 
    communityChanges: '', kenyaChanges: '', leaderActions: '', urgentArea: '', 
    otherUrgentArea: '', hopeForKenya: '', howHeard: '', otherHowHeard: '',
    participateAgain: '', consentGiven: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState('idle');
  const [zapCode, setZapCode] = useState('');
  const [error, setError] = useState('');

  const [constituencies, setConstituencies] = useState([]);
  const [wards, setWards] = useState([]);

  const totalSteps = 5;
  const stepTitles = ["About You", "Details", "Hopes and Changes", "Feedback", "Confirmation"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Create a new state object to avoid stale state issues
    const newFormData = { ...formData, [name]: value };

    // --- CASCADING LOGIC ---
    if (name === 'county') {
      newFormData.constituency = ''; // Reset constituency
      newFormData.ward = '';       // Reset ward
      setConstituencies(value ? Object.keys(geoData[value]).sort() : []);
      setWards([]);
    }
    if (name === 'constituency') {
      newFormData.ward = ''; // Reset ward
      setWards(value ? geoData[formData.county][value].sort() : []);
    }
    
    setFormData(newFormData);
  };
  

  const validateStep = (step) => {
    const age = parseInt(formData.age, 10);
    switch (step) {
      case 1:
        return formData.fullName && formData.county && formData.constituency && formData.ward && formData.age;
      case 2:
        if (age < 18) return formData.parentalPermission;
        return true;
      case 3:
        return formData.communityChanges && formData.kenyaChanges && formData.leaderActions && formData.urgentArea && (formData.urgentArea !== 'Other' || formData.otherUrgentArea) && formData.hopeForKenya;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setError('');
      if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
    } else {
      setError('Please fill out all required fields in this section before continuing.');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setError('');
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submissionStatus === 'submitting') return;
    if (!formData.consentGiven) {
      setError("You must consent to the privacy policy to submit.");
      return;
    }

    const age = parseInt(formData.age, 10);
    if (age < 18 && formData.parentalPermission !== 'Yes') {
      setError("Parental permission is required for participants under 18.");
      return;
    }
    
    setError('');
    setSubmissionStatus('submitting');
    
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbzTZ8ngspiFWYAsYSCrFcypZ-eJqzUpjxU1s7jUNcvRU9usSmnJkv0akJgTPTlGjsNM/exec';

    const formDataBody = new FormData();
    for (const key in formData) {
      formDataBody.append(key, formData[key]);
    }

    try {
      const response = await fetch(webAppUrl, {
        method: 'POST',
        body: formDataBody,
      });

      if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
      const result = await response.json();
      if (result.status === 'success' && result.code) {
        setZapCode(result.code);
        setSubmissionStatus('success');
      } else {
        throw new Error(result.message || 'An unknown server error occurred.');
      }
    } catch (err) {
      setSubmissionStatus('error');
      setError(`Submission failed: ${err.message}. Please try again later.`);
      setSubmissionStatus('idle');
    }
  };

  if (submissionStatus === 'success') {
    return (
      <div className="dyg-submission-success-card animate-fade-in">
        <CheckCircle className="dyg-success-icon" />
        <h2>Thank you, {formData.fullName}!</h2>
        <p>Your Data ya Ground ZAP code is:</p>
        <div className="dyg-zap-code">{zapCode}</div>
        <p className="dyg-success-note">
          Please keep this code safely. It will be used to verify your entry during the ZAP confirmation stage.
        </p>
      </div>
    );
  }

  const ageAsNumber = parseInt(formData.age, 10) || 0;

  return (

        <div className="dyg-form-wrapper animate-fade-in">
          <div className="dyg-progress-container">
              <div className="dyg-progress-labels">
                  <span>Step {currentStep} of {totalSteps}</span>
                  <span>{stepTitles[currentStep - 1]}</span>
              </div>
              <div className="dyg-progress-bar">
                  <div className="dyg-progress-fill" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
              </div>
          </div>
        
          <form onSubmit={handleSubmit} className="dyg-survey-form">
              <div className="animate-fade-in">
              {currentStep === 1 && (
                  <div className="dyg-form-section">
                  <h3 className="dyg-form-section-title">Section 1 — About You</h3>
                  <p className="dyg-form-section-description">No emails or identifying documents are collected for your privacy.</p>
                  
                  <div className="dyg-form-group"><label htmlFor="fullName">Full Name</label><input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your first and last name" required /></div>
                  
                  <div className="dyg-form-group"><label htmlFor="county">County</label><select id="county" name="county" value={formData.county} onChange={handleInputChange} required><option value="" disabled>Select the county where you live</option>{counties.map(county => <option key={county} value={county}>{county}</option>)}</select></div>
                  
                  {formData.county && (
                    <div className="dyg-form-group animate-fade-in"><label htmlFor="constituency">Constituency</label><select id="constituency" name="constituency" value={formData.constituency} onChange={handleInputChange} required><option value="" disabled>Select your constituency</option>{constituencies.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
                  )}
                  
                  {formData.constituency && (
                    <div className="dyg-form-group animate-fade-in"><label htmlFor="ward">Ward</label><select id="ward" name="ward" value={formData.ward} onChange={handleInputChange} required><option value="" disabled>Select your ward</option>{wards.map(w => <option key={w} value={w}>{w}</option>)}</select></div>
                  )}

                  <div className="dyg-form-group"><label htmlFor="age">Age</label><input type="number" id="age" name="age" value={formData.age} onChange={handleInputChange} min="5" max="120" placeholder="Enter your age in years" required /></div>
                  </div>
              )}
              {currentStep === 2 && (
                  <div className="dyg-form-section conditional">
                  {ageAsNumber && ageAsNumber < 18 ? (
                      <>
                      <h3 className="dyg-form-section-title">Details (Under 18)</h3>
                      <div className="dyg-form-group"><label>Do you have permission from your parent/guardian to participate?</label><div><label className="dyg-radio-label"><input type="radio" name="parentalPermission" value="Yes" onChange={handleInputChange} required checked={formData.parentalPermission === 'Yes'}/> Yes, I have permission</label><label className="dyg-radio-label"><input type="radio" name="parentalPermission" value="No" onChange={handleInputChange} checked={formData.parentalPermission === 'No'}/> No, I do not have permission</label></div>{formData.parentalPermission === 'No' && (<p className="dyg-form-note error">You’ll need to obtain permission from your parent or guardian to participate.</p>)}</div>
                      {formData.parentalPermission === 'Yes' && (<div className="dyg-form-group"><label>Is your parent/guardian also taking part in this survey?</label><div><label className="dyg-radio-label"><input type="radio" name="parentParticipating" value="Yes" onChange={handleInputChange} /> Yes</label><label className="dyg-radio-label"><input type="radio" name="parentParticipating" value="No" onChange={handleInputChange} /> No / Not sure</label></div></div>)}
                      </>
                  ) : (
                      <>
                      <h3 className="dyg-form-section-title">Details (18 and Above)</h3>
                      <div className="dyg-form-group"><label>Are you a parent, guardian, or caretaker?</label><div><label className="dyg-radio-label"><input type="radio" name="isParent" value="Yes" onChange={handleInputChange} /> Yes</label><label className="dyg-radio-label"><input type="radio" name="isParent" value="No" onChange={handleInputChange} /> No</label></div></div>
                      {formData.isParent === 'Yes' && (<div className="dyg-form-group"><label htmlFor="dependents">How many children or dependents do you care for? (Optional)</label><input type="number" id="dependents" name="dependents" value={formData.dependents} onChange={handleInputChange} min="0" /></div>)}
                      </>
                  )}
                  </div>
              )}
              {currentStep === 3 && (
                  <div className="dyg-form-section">
                      <h3 className="dyg-form-section-title">Section 2 — Hopes and Changes</h3>
                      <div className="dyg-form-group"><label htmlFor="communityChanges">What are the main changes you would like to see in your community or county?</label><textarea id="communityChanges" name="communityChanges" value={formData.communityChanges} onChange={handleInputChange} rows="3" placeholder="e.g., better roads, schools, health care, jobs..." required></textarea></div>
                      <div className="dyg-form-group"><label htmlFor="kenyaChanges">What positive change would you most like to see in Kenya as a whole?</label><textarea id="kenyaChanges" name="kenyaChanges" value={formData.kenyaChanges} onChange={handleInputChange} rows="3" placeholder="Describe one thing you wish to see improve..." required></textarea></div>
                      <div className="dyg-form-group"><label htmlFor="leaderActions">What do you hope leaders can do to bring about these changes?</label><textarea id="leaderActions" name="leaderActions" value={formData.leaderActions} onChange={handleInputChange} rows="3" placeholder="How can they help make your hopes a reality?" required></textarea></div>
                      <div className="dyg-form-group"><label htmlFor="urgentArea">Which area do you think needs the most urgent attention in your county?</label><select id="urgentArea" name="urgentArea" value={formData.urgentArea} onChange={handleInputChange} required><option value="" disabled>Select an area</option><option>Education and Youth</option><option>Health and Sanitation</option><option>Jobs and Economy</option><option>Agriculture and Food Security</option><option>Roads, Transport, and Infrastructure</option><option>Security and Justice</option><option>Environment and Climate Action</option><option>Equality and Human Rights</option><option>Governance and Accountability</option><option value="Other">Other (please specify)</option></select></div>
                      {formData.urgentArea === 'Other' && (<div className="dyg-form-group conditional-inline animate-fade-in"><label htmlFor="otherUrgentArea">Please describe the other area:</label><input type="text" id="otherUrgentArea" name="otherUrgentArea" value={formData.otherUrgentArea} onChange={handleInputChange} required /></div>)}
                      <div className="dyg-form-group"><label htmlFor="hopeForKenya">In your own words, describe your hope or ‘prayer’ for Kenya’s future.</label><textarea id="hopeForKenya" name="hopeForKenya" value={formData.hopeForKenya} onChange={handleInputChange} rows="3" placeholder="Write a short statement that expresses your dream..." required></textarea></div>
                  </div>
              )}
              {currentStep === 4 && (
                  <div className="dyg-form-section">
                      <h3 className="dyg-form-section-title">Section 3 — Feedback (Optional)</h3>
                      <div className="dyg-form-group"><label>How did you hear about the Data ya Ground survey?</label><select name="howHeard" value={formData.howHeard} onChange={handleInputChange}><option value="">Select an option</option><option>Friend or family member</option><option>Social media (TikTok, X, Facebook, etc.)</option><option>Community meeting or event</option><option>Radio or news mention</option><option value="Other">Other (please specify)</option></select></div>
                      {formData.howHeard === 'Other' && (<div className="dyg-form-group conditional-inline animate-fade-in"><label htmlFor="otherHowHeard">Please specify how you heard about us:</label><input type="text" id="otherHowHeard" name="otherHowHeard" value={formData.otherHowHeard} onChange={handleInputChange} /></div>)}
                      <div className="dyg-form-group"><label>Would you like to take part again in the next survey?</label><div><label className="dyg-radio-label"><input type="radio" name="participateAgain" value="Yes" onChange={handleInputChange} /> Yes</label><label className="dyg-radio-label"><input type="radio" name="participateAgain" value="No" onChange={handleInputChange} /> No</label><label className="dyg-radio-label"><input type="radio" name="participateAgain" value="Not sure" onChange={handleInputChange} /> Not sure</label></div></div>
                  </div>
              )}
              {currentStep === 5 && (
                    <div className="dyg-form-section">
                        <h3 className="dyg-form-section-title">Section 4 — Confirmation</h3>
                        <div className="dyg-confirmation-box"><p>Please review your answers. Once submitted, they cannot be changed.</p><p>After submission, your unique ZAP code will appear on screen. Kindly save it safely — it will be required for verification later.</p></div>
                        <div className="dyg-form-group consent-group">
                          <label className="dyg-radio-label">
                            <input 
                              type="checkbox" 
                              name="consentGiven"
                              checked={formData.consentGiven} 
                              onChange={handleInputChange} // Use the standard handler
                              required 
                            />
                            <span>I confirm that I am 18 years or older, or that I have parental/guardian permission to participate, and I consent to the use of my anonymous responses as outlined in the <Link to="/projects/data-ya-ground/privacy" target="_blank">Privacy Policy</Link>.</span>
                          </label>
                        </div>
                    </div>
                )}
              </div>
        
              
              {error && <p className="dyg-error-message animate-fade-in">{error}</p>}
              
              <div className="dyg-form-navigation">
              {currentStep > 1 && (<button type="button" onClick={prevStep} className="dyg-nav-btn dyg-back-btn"><ArrowLeft /> Back</button>)}
              {currentStep < totalSteps && (<button type="button" onClick={nextStep} className="dyg-nav-btn dyg-next-btn">Next <ArrowRight /></button>)}
              {currentStep === totalSteps && (
                  <button 
                    type="button" 
                    onClick={handleSubmit}
                    className="dyg-submit-btn" 
                    disabled={submissionStatus === 'submitting' || !formData.consentGiven}
                  >
                    <Send />
                    {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Survey'}
                  </button>
              )}
              </div>
          </form>
        </div>
  );
};

export default SurveyForm;