import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // 상품 상세 정보를 불러오는 API 요청
        const response = await axios.get(`http://localhost:8080/detail/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Product Detail Page</h1>
      {product ? (
        <div>
          <h2>{product.productName}</h2>
          <img src={product.productMain} alt={product.productName} />
          <p>{product.productDescription}</p>
          <p>가격: {product.productPrice}원</p>
          <p>카테고리: {product.productCategory}</p>
          <p>색상: {product.productColor}</p>
          {/* 기타 상품 정보 */}
          <p>재고: {product.productStock}</p>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetailPage;