import React from 'react';
import './AnatomySection.css';
import anatomyImage from '../../assets/anatomy-placeholder.png'; // Replace with actual image if available

const healthIndicators = [
  { label: 'Healthy Heart', status: 'good', top: '15%', left: '45%' },
  { label: 'Lungs', status: 'bad', top: '28%', left: '48%' },
  { label: 'Teeth', status: 'good', top: '58%', left: '46%' },
  { label: 'Bone', status: 'good', top: '75%', left: '50%' },
];

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <h2 className="anatomy-title">Anatomy</h2>
      <div className="anatomy-container">
        <img src={anatomyImage} alt="Anatomical Illustration" className="anatomy-image" />
        {healthIndicators.map((item, index) => (
          <div
            key={index}
            className={`indicator ${item.status}`}
            style={{ top: item.top, left: item.left }}
          >
            <span className="indicator-dot"></span>
            <span className="indicator-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
