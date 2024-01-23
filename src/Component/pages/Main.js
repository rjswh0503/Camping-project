import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../css/Main.css';
import CampMain from './camp/CampMain';
import ShopMain from './shop/ShopMain';

const Main = () => {
  const redirectToShop = () => {
    window.location.href = '/shop';
  };

  return (
    <div className='main-container'>
      <div className='main-header'>
        <h1>메인페이지</h1>
      </div>
      <div className='camp-content'>
        <button onClick={redirectToShop}>쇼핑몰로 이동</button>
      </div>
    </div>
  );
};

export default Main;
