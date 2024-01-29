// M_O_D_U_L_E & L_I_B_R_A_R_Y
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddToCart from '../Pages/Addtocart';

// C_O_M_P_O_N_E_N_T_S
export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const cartQuintity = useSelector(state => state.cart.Quantity);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    document.title = `lAX Watch ${location.pathname.replace('/', '')}`;
  }, [location.pathname]);

  return (
    <div>
      <nav className="navbar navbar-expand-md position-relative" style={{ zIndex: '11', backgroundColor: '#171617' }}>
        <div className="container-fluid align-items-baseline">
          <Link className="navbar-brand text-white fw-bold fs-3" to="/">lAX</Link>
          <div className='d-flex d-md-none'>
              <Link className="nav-link active text-white me-3" aria-current="page" to="/Login">
                <i className="fa-regular fa-user"></i>
              </Link>
              <Link className="nav-link active text-white me-3" aria-current="page" onClick={toggleSidebar}>
                <i className="fa-solid fa-cart-shopping"></i> {cartQuintity}
              </Link>
            <button className="btn btn-outline-light d-flex d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="offcanvas offcanvas-end bg-dark" id="navbarOffcanvas" tabIndex="-1" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fw-bold text-white ms-4" id="offcanvasNavbarLabel">lAX</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-md-0 ms-5" data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link active text-white" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-md-0 ms-5" data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link active text-white" aria-current="page" to="/About" >
                  About
                </Link>
              </li>
              <li className="nav-item ms-md-0 ms-5" data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link active text-white" aria-current="page" to="/Contect" >
                  Contect
                </Link>
              </li>
              <li className="nav-item ms-md-0 ms-5" data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link active text-white" aria-current="page" to="/Allproduct" >
                  Watch
                </Link>
              </li>
              <li className="nav-item ms-md-0 ms-5 ms-md-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link active text-white" aria-current="page" to="/Login">
                  <i className="fa-regular fa-user me-1"></i> Login
                </Link>
              </li>
              <li className="nav-item ms-md-0 ms-5" data-bs-dismiss="offcanvas" aria-label="Close">
                <Link className="nav-link active text-white" aria-current="page" onClick={toggleSidebar}>
                  <i className="fa-solid fa-cart-shopping"></i> {cartQuintity}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="d-flex justify-content-between p-5">
          <Link to='/Addtocart'>
            <button className="btn btn-outline-dark" onClick={toggleSidebar}>
              CartPage
            </button>
          </Link>
          <button className="btn btn-outline-dark" onClick={toggleSidebar}>
            Close
          </button>
        </div>
        <AddToCart />
      </aside>
    </div>
  );
}



