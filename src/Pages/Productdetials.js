import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Watchimage } from '../Assets/Images';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Redux/Cartslice'
const ProductDetails = () => {
    const { Id } = useParams();
    const product = Watchimage.find((item) => item.Id == Id);
    const [selectedProduct, setSelectedProduct] = useState(product);

    const getRandomProducts = () => {
        const allProducts = [...Watchimage];
        const uniqueProducts = [];

        while (uniqueProducts.length < 3 && allProducts.length > 0) {
            const randomIndex = Math.floor(Math.random() * allProducts.length);
            const randomProduct = allProducts.splice(randomIndex, 1)[0];
            uniqueProducts.push(randomProduct);
        }

        return uniqueProducts;
    };

    const randomProducts = getRandomProducts();

    const handleSimilarProductClick = (clickedProduct) => {
        setSelectedProduct(clickedProduct);
    };
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem(selectedProduct));
    };
    return (
        <div>
            <section className="container" id="productDetailsSection">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                        {selectedProduct && (
                            <div className="modal-overlay" onClick={() => setSelectedProduct()}>
                                <div className="border p-5 rounded-4 mb-3 d-flex align-items-center BlurBg">
                                    <div className='d-flex justify-content-center'>
                                        <img className="rounded-4 w-75" src={selectedProduct.Image} alt="Product" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-lg-6">
                        <div className="ps-lg-3 BlurBg border rounded-4 p-5">
                            <h4 className="title text-white">
                                {selectedProduct.Title}
                            </h4>
                            <div className="mb-3">
                                <span className="h5 text-white">{selectedProduct.Price} $</span>
                                <span className="text-muted text-white">/per box</span>
                            </div>
                            <p className='text-white'>
                                {selectedProduct.Description}
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reprehenderit dicta, error assumenda velit quo similique, dolor rerum exercitationem sed eius provident tenetur iure reiciendis laudantium perspiciatis dolore officia tempora?
                            </p>
                            <button className="btn btn-primary" onClick={addToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="px-0 border rounded-2 shadow-0">
                            <div className="card-body d-flex justify-content-evenly BlurBg">
                                {Watchimage.slice(0, 4).map((item, index) => (
                                    <div className="d-block my-3" key={index}>
                                        <a
                                            href="#"
                                            className="me-3 nav-link"
                                            onClick={(e) => {
                                                handleSimilarProductClick(item);
                                            }}
                                        >
                                            <img
                                                src={item.Image}
                                                style={{ minWidth: 96, height: 96 }}
                                                className="img-md img-thumbnail bg-transparent"
                                                alt={`Similar Item ${index + 1}`}
                                            />
                                        </a>
                                        <div className="info">
                                            <a href="#" className="nav-link mb-1 text-light">
                                                {item.Title}
                                            </a>
                                            <strong className="text-light"> ${item.Price}</strong>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
