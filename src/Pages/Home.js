// M_O_D_U_L_E & L_I_B_R_A_R_Y
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// C_O_M_P_O_N_E_N_T_S
import Allproduct from '../Common/Allproduct';
import { Allimages, Watchimage } from '../Assets/Images';

export default function Home() {
  return (
    <div>
      {/* Craousal Secthion 1 */}
      <section>
        <div id="carousel-example-2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="view">
                <img src={Allimages[3]} className="d-block w-100 object-fit-cover" style={{ height: '90vh', filter: 'brightness(50%)' }} alt="First slide" />
                <div className="mask rgba-black-light" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Free photo close up on clock with time change</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="view">
                <img src={Allimages[2]} className="d-block w-100 object-fit-cover" style={{ height: '90vh', filter: 'brightness(50%)' }} alt="Second slide" />
                <div className="mask rgba-black-strong" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Rendering of smart home device  </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima voluptate omnis, sed temporibus facere distinctio earum unde aliquid. Natus reprehenderit voluptatum dignissimos. Eveniet doloribus nam voluptatem labore veritatis quidem!</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="view">
                <img src={Allimages[4]} className="d-block w-100 object-fit-cover" style={{ height: '90vh', filter: 'brightness(50%)' }} alt="Third slide" />
                <div className="mask rgba-black-slight" />
              </div>
              <div className="carousel-caption">
                <h3 className="h3-responsive">Gray scale shot of a black watch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus fugit nostrum repudiandae perferendis, explicabo, aliquam nam iure at quasi porro commodi architecto neque necessitatibus omnis amet odit odio! In.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel-example-2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel-example-2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* Best Seller Secthion 2 */}
      <section className="container">
        <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Best Seller</h1>
        <div className="row BlurBg rounded align-items-stretch">
          <div className="col-12 col-lg-6 p-0 d-flex">
            <img className="img-fluid rounded" loading="lazy" src={Allimages[0]} />
          </div>
          <div className="col-12 col-lg-6 text-white p-3 d-flex">
            <div>
              <p>With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
              <p>With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
              <p>With years of experience and deep industry knowledge, we have a proven track record of success and are</p>
              <button type="button" className="btn btn-outline-light">Connect Now</button>
            </div>
          </div >
        </div >
      </section >
      {/* Add To Cart Secthion 3 */}
      <section className='container'>
        <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Our Best Product</h1>
        <Swiper navigation={true} slidesPerView={1} modules={[Navigation]} loop={true} breakpoints={{ 768: { slidesPerView: 3 } }} className="mySwiper">
          <div className='row'>
            {Watchimage.map((watchImage, index) => (
              <SwiperSlide key={index}>
                <div className='col-md-9 col-12 m-auto'>
                  <Allproduct Image={watchImage} />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="Allproduct">
            <button className='btn btn-outline-light mt-5'>View All Product</button>
          </a>
        </div>
      </section>
      {/* Men And Women Watch */}
      <section className='container'>
        <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Men And Women Watch</h1>
        <div className="row my-5 overflow-hidden">
          <div className="col-12 col-md-6 position-relative align-items-center d-flex" >
            <img src={Allimages[0]} className='w-100 object-fit-cover rounded h-75' style={{ filter: 'brightness(50%)' }} />
            <h1 className='fw-light position-absolute start-50 top-50 translate-middle text-light'>Men Watch</h1>
          </div>
          <div className="col-12 col-md-6 position-relative align-items-center d-flex">
            <img src={Allimages[1]} className='w-100 object-fit-cover rounded h-75' style={{ filter: 'brightness(50%)' }} />
            <h1 className='fw-light position-absolute start-50 top-50 translate-middle text-light'>Men Watch</h1>
          </div>
        </div>
      </section >
    </div >
  )
}
