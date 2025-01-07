import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubHero = () => {
  const style = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      
      padding: '20px',
    },

    item: {
      backgroundColor: '#F4A4AA',
      color: '#333',
      fontSize: '18px',
      

      border: '1px solid #F52F37',
      height : '450px',
      width : "32%"

      
    }
  };
   
  const navigate = useNavigate();

  const showDrinks = () => {
    navigate('/Drinks');
  };
  const showFrozenFood = () => {
    navigate('/FrozenFood');
  };
  const showKerosene = () => {
    navigate('/Kerosene');
  };


  
  return (
    <div style={style.container}>
      <div style={style.item} onClick={showDrinks}>
        <img src="src/assets/Images/Drinks.jpg" alt="drink" style={{ width: '100%', height: '447px', }} />
    
      </div >
      <div style={style.item} onClick={showFrozenFood}>
        <img src="src/assets/Images/Fish.jpeg" alt="fish" style={{ width: '100%', height: '447px', }} /></div>
      <div style={style.item} onClick={showKerosene}>
        <img src="src/assets/Images/Kerosene.webp" alt="Kerosene" style={{ width: '100%', height: '447px', }} />
      </div>
    </div>
  );
};

export default SubHero;
