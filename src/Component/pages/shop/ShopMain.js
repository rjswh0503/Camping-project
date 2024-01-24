import React from 'react';
import Carousel from '../../Carousel/MainPageCarousel';
import CategoryList from './CategoryList';
import Main from '../shop/Main';
import Search from '../../Search';
import ShopNav from '../../ShopNav';
import ButtonUp from '../../../Component/ButtonUp';

const ShopMain = () => 
{
  
  
  return (
    
    <div>

      <div>
      </div>
      <div style={{paddingTop:'50px'}}>
      <Carousel/>
      </div>
      <div>
      <ShopNav/>
      <section className='Search'>
        
        <Search/> 
      </section>
      <section>
      </section>
      </div>
      <div>
        <Main/>
        <CategoryList/>
      </div>
     
    
    </div>
  );
};

export default ShopMain;
