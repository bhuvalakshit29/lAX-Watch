// M_O_D_U_L_E & L_I_B_R_A_R_Y
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
// C_O_M_P_O_N_E_N_T_S

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contect from './Pages/Contect';
import Login from './Pages/Login';
import AllProduct from './Components/AllProduct';
import Productdetials from './Pages/Productdetials';
import Addtocart from './Pages/Addtocart';
import './App.css'
import bgvideo from './Assets/Image/Backgroundvideo.mp4'
export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src={bgvideo} type="video/mp4" />
        </video>
      </div>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AllProduct" element={<AllProduct />} />
          <Route path="/Products/:Id" element={<Productdetials />} />
          <Route path="/Addtocart" element={<Addtocart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
// npm i react-router-dom react-spinners react-redux @reduxjs/toolkit swiper