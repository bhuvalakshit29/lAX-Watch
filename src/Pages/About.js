// M_O_D_U_L_E & L_I_B_R_A_R_Y
import React from 'react'

// C_O_M_P_O_N_E_N_T_S
import { Allimages } from '../Assets/Images'
export default function About() {
    return (
        <div>
            {/* About-Containt */}
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
            {/* Our Vision */}
            <section className="container">
                <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Our Vision</h1>
                <div className="row BlurBg rounded align-items-stretch">
                    <div className="col-12 col-lg-6 p-0 d-flex">
                        <img className="img-fluid rounded" loading="lazy" src={Allimages[0]} />
                    </div>
                    <div className="col-12 col-lg-6 text-white p-3 d-flex">
                        <div>
                            <p>With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                            <p>With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                            <button type="button" className="btn btn-outline-light">Connect Now</button>
                        </div>
                    </div >
                </div >
            </section >
            {/* our Approach */}
            <section className="container">
                <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Our Approach</h1>
                <div className="row BlurBg rounded align-items-stretch">
                    <div className="col-12 col-lg-6 text-white p-3 d-flex">
                        <div>
                            <p>With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                            <p>With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                            <button type="button" className="btn btn-outline-light">Connect Now</button>
                        </div>
                    </div >
                    <div className="col-12 col-lg-6 p-0 d-flex">
                        <img className="img-fluid rounded" loading="lazy" src={Allimages[1]} />
                    </div>
                </div >
            </section >
            {/* Who Are We */}
            <section className="container ">
                <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Who Are We?</h1>
                <div className="row BlurBg rounded">
                    <div className="col-12 text-white p-3">
                        <div className="row justify-content-xl-center">
                            <div className="col-12">
                                <p className="lead fs-4 mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                                <p className="mb-5">Nullam gravida orci ac luctus molestie. Fusce finibus congue erat, non aliquam magna tincidunt at. Aenean lacinia arcu ex, sed pharetra nibh porta a. Curabitur vel consequat nibh, ac interdum nisl. Nunc pulvinar nec massa vitae sollicitudin.</p>
                                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex">
                                            <div className="me-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="mb-3">Versatile Brand</h4>
                                                <p className="mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex">
                                            <div className="me-4 text-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                                                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="mb-3">Digital Agency</h4>
                                                <p className="mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose Us? */}
            <section className="container">
                <h1 className='m-auto text-white text-center my-5 fw-light border-bottom w-50 pb-3'>Why Choose Us ?</h1>
                <div className="row mb-5 BlurBg rounded align-items-stretch">
                    <div className="col-12 col-lg-6 p-0 d-flex">
                        <img className="img-fluid rounded" loading="lazy" src={Allimages[0]}/>
                    </div>
                    <div className="col-12 col-lg-6 text-white p-3 d-flex">
                        <div>
                            <p>With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                            <p>With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                            <button type="button" className="btn btn-outline-light">Connect Now</button>
                        </div>
                    </div >
                </div >
            </section >
        </div>
    )
}
