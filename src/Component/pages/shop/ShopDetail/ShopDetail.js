import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import '../css/ShopDetail/ShopDetail.css';
import ShopFooter from '../../../ShopFooter';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ShopHeader from '../../../ShopHeader';
import Nav from '../../../../CampNavbar';
import ShopReview from './ShopReview';
import ShopMore from './ShopMore';
import ShopInquiry from './ShopInquiry';
import { Routes, Route} from 'react-router-dom';

const ShopDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/detail/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("상품 세부 정보를 불러오는 중 오류 발생", error);
      }
    };

    fetchData();
  }, [productId]);

  const handleHeart = () => {
    setLike(!like);
  };

  return (
    
    <div className='main-shopping'>
      <Nav/>
      <div className='main-section1'>
        <div className='main-section2'>
          <main className='main-section3'>
            {product ? (
              <>
                <div className='main-img'>
                <div className='right-section-img'>
                      <img style={{width:'300px',height:'auto'}} src={product.productThumbnail}/>
                    </div>
                </div>
                <section className='right-section'>
                  <div className='right-section2'>무료배송</div>
                  <div className='right-section3'>
                    <h1 className='right-section-title'>{product.productName}</h1>
                    <h2 className='right-section-title2'>{product.productDescription}</h2>
                  </div>
                  <span>판매가{product.formattedProductPrice}</span>
                  <div className='right-section-login'>
                    로그인 후, 적립 혜택이 제공됩니다.
                  </div>
                  <div>
                    
                  </div>
                  <ul className='right-section-ul'>
                    <li className='right-section-li'>
                      <dt className='right-section-dt'>배송</dt>
                    </li>
                  </ul>
                  <div className='right-section-footer'>
                    <button className='right-section-footer-button1' type='button'>
                      <span className='right-section-footer-button-span'>
                        <div className='like' onClick={handleHeart}>
                          {like ? (
                            <AiFillHeart style={{ color: '#FEA92A', fontSize: '30px' }} />
                          ) : (
                            <AiOutlineHeart style={{ fontSize: '30px' }} />
                          )}
                        </div>
                      </span>
                    </button>
                  </div>
                </section>
              </>
            ) : (
              <p>상품을 찾을 수 없습니다.</p>
            )}
          </main>
          <nav className='nav-first'>
            <ul className='nav-first-ul'>
              <li className='nav-first-ul-li'>
                <Link to='shop/detail/:productId/more'><span className='nav-first-ul-li-a-span'>상세정보</span></Link>
              </li>
              <li className='nav-first-ul-li'>
                <Link to='/review'><span className='nav-first-ul-li-a-span'>후기</span></Link>
                <span className='nav-first-ul-li-a-span-count'></span>
              </li>
              <li className='nav-first-ul-li'>
                <Link to='/inquiry'><span className='nav-first-ul-li-a-span'>문의</span></Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='Footer'>

          <Routes>
            <Route path='/review' element={<ShopReview productId={productId} />} />
            <Route path='/more' element={<ShopMore productId={productId} />} />
            <Route path='/inquiry' element={<ShopInquiry />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
