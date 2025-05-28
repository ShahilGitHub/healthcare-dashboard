import React from 'react';
import './AnatomySection.css';
import anatomyImage from '../../assets/anatomy.png';
import { FaHeart, FaLungs, FaTooth, FaBone } from 'react-icons/fa';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <h2>Anatomy</h2>
      <div className="anatomy-content">
        <img src={anatomyImage} alt="Anatomy" className="anatomy-image" />
        <div className="label label-heart">
          <span className="dot green"></span>
          <FaHeart className="label-icon" />
          Healthy Heart
        </div>
        <div className="label label-lungs">
          <span className="dot red"></span>
          <FaLungs className="label-icon" />
          Lungs
        </div>
        <div className="label label-teeth">
          <span className="dot green"></span>
          <FaTooth className="label-icon" />
          Teeth
        </div>
        <div className="label label-bone">
          <span className="dot green"></span>
          <FaBone className="label-icon" />
          Bone
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
