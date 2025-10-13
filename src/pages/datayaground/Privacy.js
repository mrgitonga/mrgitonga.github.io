import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="dyg-page-container dyg-privacy-container">
      <div className="dyg-page-header">
        <h1>Privacy Policy</h1>
        <p>Your trust and privacy are fundamental to our mission.</p>
      </div>

      <div className="dyg-privacy-content">
        <p className="dyg-last-updated">Last Updated: October 12, 2025</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to Data ya Ground. We are a citizen-led data movement committed to capturing the authentic voices, hopes, and priorities of the Kenyan people. This Privacy Policy explains what data we collect, how we use it, and the measures we take to protect your privacy, in accordance with Kenya's Data Protection Act (2019).
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>To ensure both the integrity of our data and the privacy of our participants, we collect the following information:</p>
          <ul>
            <li><strong>Full Name:</strong> Used solely to associate your survey responses with your ZAP Day verification. It is never made public.</li>
            <li><strong>Location Data:</strong> We collect your County, Constituency, and Ward to understand regional priorities and ensure representative data.</li>
            <li><strong>Demographic Data:</strong> We collect your Age to analyze trends across different generations.</li>
            <li><strong>Survey Responses:</strong> Your answers to questions about your hopes, challenges, and priorities for your community and Kenya.</li>
          </ul>
          <p><strong>What We DO NOT Collect:</strong> We will never ask for your email address, phone number, national ID, or any other personally identifying documents.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>The data you provide is used for the following purposes:</p>
          <ul>
            <li><strong>Data Aggregation:</strong> Your individual responses are combined with thousands of others to identify broad trends, patterns, and priorities at the community, county, and national levels.</li>
            <li><strong>Public Dashboard Reporting:</strong> The aggregated, fully anonymized data is visualized and published on our public dashboards. No individual response or personal information is ever displayed.</li>
            <li><strong>The People's Manifesto:</strong> The insights gathered form the basis of the People's Manifesto, a living document reflecting the authentic voice of the Kenyan people.</li>
          </ul>
        </section>

        <section>
          <h2>Data Security and Sharing</h2>
          <p>
            We are committed to protecting your data. Raw survey responses containing your name are stored securely in a private Google Sheet with restricted access. We do not sell or share your personal information with any third parties. Only aggregated and anonymized data is used for public-facing reports and dashboards.
          </p>
        </section>
        
        <section>
          <h2>Data Retention Policy</h2>
          <p>
            In line with data minimization principles, we adhere to the following retention schedule:
          </p>
          <ul>
            <li>Raw survey responses (including your name) are kept for a maximum of <strong>12 months</strong> for verification and short-term analysis.</li>
            <li>After 12 months, all personally identifiable information (PII) such as your name is permanently deleted or fully anonymized from the dataset.</li>
            <li>Anonymized data is archived for long-term analysis and historical tracking on our public dashboards.</li>
          </ul>
        </section>

        <section>
          <h2>Your Consent and Rights</h2>
          <p>
            By checking the consent box and submitting the survey, you agree to the terms outlined in this policy. As a data subject, you have the right to request access to your data or request the deletion of your personal information at any time.
          </p>
          <p>
            For any data-related inquiries, please contact us <a href="mailto:anderson.gitongan@gmail.com"><strong>by sending us an email</strong></a>.
          </p>
        

        </section>
      </div>
    </div>
  );
};

export default Privacy;