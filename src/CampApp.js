import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Register from './Component/pages/common/Register';
import GeneralRegister from './Component/pages/common/GeneralRegister';
import ManagerRegister from './Component/pages/common/ManagerRegister';
import GeneralEmailRegister from './Component/pages/common/GeneralEmailRegister';
import ManagerEmailRegister from './Component/pages/common/ManagerEmailRegister';
import Login from './Component/pages/common/Login';
import CampBoard from './Component/pages/camp/CampBoard/CampBoard';
import CampBoardAll from './Component/pages/camp/CampBoard/CampBoardAll';
import CampBoardDetail from './Component/pages/camp/CampBoard/CampBoardDetail';
import CampBoardUpdate from './Component/pages/camp/CampBoard/CampBoardUpdate';
import Preloader from './Pre';
import Navbar from './CampNavbar';
import Home from './Component/pages/camp/CampMain/Home/Home';
import About from './Component/pages/camp/CampMain/About/About';
import Reservations from './Component/pages/camp/CampMain/Reservations/Reservations';
import Footer from './Footer';
import Inquiry from './Component/pages/camp/CampMain/Inquiry/Inquiry';
import ScrollToTop from './CampScrollToTop';
import './CampStyle.css';
import './CampApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import ShopMain from './Component/pages/shop/ShopMain';


function CampApp() {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/camp" element={<Home />} />
          <Route path="/camp/reservation" element={<Reservations />} />
          <Route path="/camp/about" element={<About />} />
          <Route path="/camp/inquiry" element={<Inquiry />} />
          
          <Route path='/register' element={<Register />} />
          <Route path='/register/general' element={<GeneralRegister />} />
          <Route path='/register/manager' element={<ManagerRegister />} />
          <Route path='/register/general/email' element={<GeneralEmailRegister />} />
          <Route path='/register/manager/email' element={<ManagerEmailRegister />} />
          <Route path='/shop' element={<ShopMain/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/camp/board/add' element={<CampBoard />} />
          <Route path='/camp/board/all' element={<CampBoardAll />} />
          <Route path="/camp/board/get/:camp_id" element={<CampBoardDetail />} />
          <Route path="/camp/board/edit/:camp_id" element={<CampBoardUpdate />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default CampApp;