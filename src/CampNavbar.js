import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, Routes, Route } from 'react-router-dom';
import { IoMdSunny } from 'react-icons/io';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { FaClipboardList } from "react-icons/fa";
import { Modal } from 'react-bootstrap';
import logo from '../src/Component/Assets/logo.png';
import OpenWeatherMap from './Component/pages/camp/CampMain/Home/openWeatherMap';
import { CgChevronDownO } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";
import ShopCart from './Component/pages/shop/ShopCart';


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isShopIn, setisShopIn] = useState(false);

  const handleWeatherModalClose = () => setShowWeatherModal(false);
  const handleWeatherModalShow = () => setShowWeatherModal(true);


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  
  
 

  

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
    expanded={expand}
    fixed="top"
    expand="md"
    className={navColour ? 'sticky' : 'navbar'}
  >
      <Container>
        <Navbar.Brand href="/camp" className="d-flex">
          <img
            src={logo}
            className="logo"
            alt="brand"
            style={{ width: '250px', height: 'auto' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/camp" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> 홈페이지
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to={isShopIn ? "/shop/cart" : "/camp/board/all"}
                onClick={() => {
                  updateExpanded(false);
                  handleWeatherModalClose();
                }}
              >
                {isShopIn ? "장바구니" : "전체상품"}
                <FaClipboardList style={{ marginBottom: '2px' }} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/shop"
                onClick={() => {
                  setisShopIn(!isShopIn);
                }}
              >
               
                <FiShoppingCart style={{ marginBottom: '2px' }} /> 쇼핑몰
              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link href="#" onClick={handleWeatherModalShow}>
                <IoMdSunny style={{ marginBottom: '2px' }} /> 날씨
              </Nav.Link>
            </Nav.Item>

            <Modal show={showWeatherModal} onHide={handleWeatherModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>날씨</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <OpenWeatherMap />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleWeatherModalClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Nav.Item>
              <Nav.Link as={Link} to={isLoggedIn ? "/logout" : "/login"} onClick={() => updateExpanded(false)}>
                {isLoggedIn ? <CgCloseO style={{ marginBottom: '2px' }} /> : <CgChevronDownO style={{ marginBottom: '2px' }} />}
                {isLoggedIn ? "로그아웃" : "로그인"}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavBar;
