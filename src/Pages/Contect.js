// M_O_D_U_L_E & L_I_B_R_A_R_Y

import React from 'react'
import { Allimages } from '../Assets/Images'
// C_O_M_P_O_N_E_N_T_S

export default function Contect() {
  return (
    <div>
      {/* Contect-Containt */}
      <section className="container-fluid">
        <div className="row BlurBg">
          <div className="col-12 text-white py-5">
            <h3 className="fs-5 mb-2 text-uppercase">About</h3>
            <h2 className="mb-4">Our journey began with <br /> a dream of redefining how the world <br /> perceives design.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas nam iusto, odio libero tempore dolorum atque similique blanditiis! Sit exercitationem pariatur placeat adipisci perspiciatis inventore? Maxime consequuntur esse architecto consequatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam possimus perferendis natus. Quas eum facilis error ipsam! Sapiente nemo omnis iure adipisci quibusdam, laboriosam fuga non corrupti ex esse illo. Sapiente nemo omnis iure adipisci quibusdam, laboriosam fuga non corrupti ex esse illo. Sapiente nemo omnis iure adipisci quibusdam, laboriosam fuga non corrupti ex esse illo.</p>
            <button type="button" className="btn btn-outline-light mb-3 mb-md-4 mb-xl-5">Discover More</button>
          </div>
        </div>
      </section>
      {/* Contect Form */}
      <section className="container ">
        <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Our Vision</h1>
        <div className="row py-4 py-xl-5 align-items-center BlurBg">
          <div className="col-12 col-md-6">
            <form action="#!">
              <div className="row text-white">
                <div className="col-12 mb-3">
                  <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="fullname" name="fullname" required placeholder='Enter Name' />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input type="email" className="form-control" id="email" name="email" placeholder='Enter Email' required />
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                    </span>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder='Enter Phone Number' />
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="subject" className="form-label">Subject <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="subject" name="subject" required placeholder='Enter Subjext' />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                  <textarea className="form-control" id="message" name="message" rows={3} required={""} placeholder='Enter Message' />
                </div>
              </div>
              <button className='btn btn-outline-light mt-4'>Submit</button>
            </form>
          </div>
          <div className="col-12 col-md-6 ">
            <img src={Allimages[1]} className='w-100' />
          </div>
        </div>
      </section>
      {/* Our Contect Source */}
      <section className='container-fluid'>
        <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Our Contect Source</h1>
        <div class="row mb-5 p-5 text-white justify-content-evenly">
          <div class="col-md-3 col-12 BlurBg mt-5 mt-md-0">
            <div class="dbox p-5 text-center">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i class="fa-solid fa-location-dot fs-1"></i>
              </div>
              <div class="text">
                <p><span>Address :</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12 BlurBg mt-5 mt-md-0">
            <div class="dbox p-5 text-center">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i class="fa-solid fa-envelope fs-1"></i>
              </div>
              <div class="text">
                <p><span>Email :</span> bhuvalaxit@29.gmail.com</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12 BlurBg mt-5 mt-md-0">
            <div class="dbox p-5 text-center">
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i class="fa-solid fa-phone fs-1"></i>
              </div>
              <div class="text">
                <p><span>Phone : <br /></span>+ 91 63530-73529</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
