import React, { useState } from 'react';
import { Sun, Moon, Download } from 'lucide-react';
import './QRCodeCard.css';

const QRCodeCard = () => {
  const [isDark, setIsDark] = useState(true);

  const qrCodeImage = isDark 
    ? process.env.PUBLIC_URL + "/wob-qr-code.png" // White-on-Black
    : process.env.PUBLIC_URL + "/bow-qr-code.png"; // Black-on-White

  // The filename for the downloaded QR code
  const downloadFilename = "DataYaGround_Survey_QR_Code.png";

  return (
    <div className="dyg-qr-code-card">
      <div className="dyg-qr-header">
        <h3>Share this Survey</h3>
        <p>Scan the code to learn more</p>
      </div>
      
      <div className="dyg-qr-image-wrapper">
        <img src={qrCodeImage} alt="Survey QR Code" />
      </div>
      
      <div className="dyg-qr-actions">
        {/* --- THEME TOGGLE --- */}
        <div className="dyg-qr-toggle">
          <span>Theme:</span>
          <button 
            onClick={() => setIsDark(false)} 
            className={`dyg-toggle-btn ${!isDark ? 'active' : ''}`}
            aria-label="Light QR Code"
          >
            <Sun size={16} />
          </button>
          <button 
            onClick={() => setIsDark(true)} 
            className={`dyg-toggle-btn ${isDark ? 'active' : ''}`}
            aria-label="Dark QR Code"
          >
            <Moon size={16} />
          </button>
        </div>

        {/* --- NEW DOWNLOAD BUTTON --- */}
        <a 
          href={qrCodeImage} 
          download={downloadFilename} 
          className="dyg-qr-download-btn-v2"
          aria-label="Download QR Code"
        >
          <Download size={16} />
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};

export default QRCodeCard;