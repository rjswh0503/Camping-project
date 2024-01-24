import React from 'react';
import ShopHeader from './ShopHeader';
import ShopNav from './ShopNav';
import Nav from '../CampNavbar';
import Carousel from './Carousel/MainPageCarousel';


function ShopLayout({ children }) {
    return(
        <div>
            <Nav/>
           
            {children}
            
          
        </div>
    )
}

export default ShopLayout;