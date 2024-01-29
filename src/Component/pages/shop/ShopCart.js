// ShoppingCart.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../shop/css/ShopCart/ShopCart.css';
import { Routes, Route, Link } from 'react-router-dom';
import ShopOrder from './ShopOrder/Order/OrderMain';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get('productId');
  const quantity = searchParams.get('quantity');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/shop/cart/post');
        setCartItems(response.data);
      } catch (error) {
        console.error('장바구니 항목을 가져오는 중 오류 발생', error);
        // 여기에 사용자에게 알리는 등의 처리를 추가할 수 있습니다.
      }
    };

    fetchCartItems();
  }, []);

  const handleAddToCart = async () => {
    try {
      // 상품을 장바구니에 추가하는 로직 추가
      await axios.post('http://localhost:8080/shop/cart/add', {
        productId: productId,
        quantity: quantity,
        // 추가로 필요한 정보가 있다면 추가하세요.
      });
      alert('상품이 장바구니에 추가되었습니다.');
    } catch (error) {
      console.error('상품을 장바구니에 추가하는 중 오류 발생', error);
      // 여기에 사용자에게 알리는 등의 처리를 추가할 수 있습니다.
    }
  };

  // 나머지 코드 생략

  return (
    <div style={{ paddingTop: '150px', paddingBottom: '150px' }} className="shopping-cart-container">
      {/* 나머지 코드 생략 */}
      <div className="cart-buttons">
        <Link to='/shop/order'>
          <button onClick={handlePurchase}>구매하기</button>
        </Link>
        <button onClick={handleAddToCart}>장바구니에 추가</button>
        <button onClick={handleDeleteAll}>전체 삭제하기</button>
        <button onClick={handleDeleteSelected}>선택 삭제하기</button>
      </div>
      {/* 나머지 코드 생략 */}
    </div>
  );
};

export default ShoppingCart;
