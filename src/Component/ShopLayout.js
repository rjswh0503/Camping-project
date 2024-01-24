import React from 'react';
import ShopHeader from './ShopHeader';
import ShopNav from './ShopNav';
import Nav from '../CampNavbar';
import Carousel from './Carousel/MainPageCarousel';
import ButtonUp from '../Component/ButtonUp';


function ShopLayout({ children }) {
    return(
        <div style={{paddingTop:'150px'}}>
            <Carousel/>
            <Nav/>
            <ShopNav/>
            {children}
            <ButtonUp/>
          
        </div>
    )
}

export default ShopLayout;