import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../pages/shop/css/ShopCart/ShopCart.css';
import {Routes, Route, Link} from 'react-router-dom';
import ShopOrder from '../ShopOrder/Order/OrderMain';

const ShoppingCart = () => {
  const [product] = useState([]);
  const [cartItems, setCartItems] = useState(product);

  useEffect(() => {
    // Fetch cart items from the server
    const fetchCartItems = async () => {
      try {
        const response = await axios.post('http://localhost:8080/cart/post');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items', error);
      }
    };

    fetchCartItems();
  }, []);

  
  const handlePurchase = async () => {
   
    console.log('Purchase items:', cartItems);
  };

  const handleDeleteAll = async () => {
    
    console.log('Delete all items in the cart');
  };


  const handleDeleteSelected = async () => {
  
    console.log('Delete selected items in the cart');
  };

  return (
    <div style={{paddingTop:'150px', paddingBottom:'150px'}} className="shopping-cart-container">
      <h2>장바구니</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>전체 선택</th>
            <th>상품사진</th>
            <th>상품명</th>
            <th>개수</th>
            <th>판매금액</th>
           
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.cartId}>
              <td>
                <img src={cartItem.productThumbnail} alt={cartItem.productName} className="product-image" />
              </td>
              <td>{cartItem.productName}</td>
              <td>{cartItem.formattedProductPrice}</td>
              <td>{cartItem.productAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{marginTop:'400px'}} className="cart-buttons">
        <Link to='/shop/order'>
        <button onClick={handlePurchase}>구매하기</button>
        </Link> 
        <button onClick={handleDeleteAll}>전체 삭제하기</button>
        <button onClick={handleDeleteSelected}>선택 삭제하기</button>
      </div>
      <Routes>
        <Route path='/shop/order' element={<ShopOrder/>}/>
      </Routes>
    </div>
  );
};

export default ShoppingCart;
