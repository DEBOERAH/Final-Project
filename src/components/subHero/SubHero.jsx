import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubHero.css'; // Import the CSS file

const SubHero = () => {
  const navigate = useNavigate();

  const showDrinks = () => navigate('/Drinks');
  const showFrozenFood = () => navigate('/FrozenFood');
  const showKerosene = () => navigate('/Kerosene');

  return (
    <div className="subhero-container">
      <div className="subhero-item" onClick={showDrinks}>
        <img src="src/assets/Images/Drinks.jpg" alt="Drink" className="subhero-image" />
      </div>
      <div className="subhero-item" onClick={showFrozenFood}>
        <img src="src/assets/Images/Fish.jpeg" alt="Fish" className="subhero-image" />
      </div>
      <div className="subhero-item" onClick={showKerosene}>
        <img src="src/assets/Images/Kerosene.webp" alt="Kerosene" className="subhero-image" />
      </div>
    </div>
  );
};

export default SubHero;
