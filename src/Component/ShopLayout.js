import React from 'react';
import ShopHeader from './ShopHeader';
import ShopNav from './ShopNav';

import Carousel from './Carousel/MainPageCarousel';


function ShopLayout({ children }) {
    return(
        <div>
            <ShopHeader/>
            <ShopNav/>
        
            {children}
            
          
        </div>
    )
}

export default ShopLayout;