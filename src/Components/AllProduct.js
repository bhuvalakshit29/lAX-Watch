import React, { useState } from 'react';
import { Watchimage } from '../Assets/Images';
import Allproduct from '../Common/Allproduct';

const AllProduct = () => {
    const [searchProduct, setSearchProduct] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);
    const [filteredProducts, setFilteredProducts] = useState(Watchimage);

    const applyPriceFilter = () => {
        const newFilteredProducts = Watchimage.filter((product) => {
            const productPrice = product.Price || 0;
            return productPrice >= minPrice && productPrice <= maxPrice;
        });

        setFilteredProducts(newFilteredProducts);
    };

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchProduct(searchTerm);

        const newFilteredProducts = Watchimage.filter((product) =>
            product.Title.toLowerCase().includes(searchTerm)
        );

        setFilteredProducts(newFilteredProducts);
    };

    const handleFilterApply = () => {
        applyPriceFilter();
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <aside className="col-md-3 col-12">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control me-1 bg-transparent text-white"
                            placeholder="Search"
                            value={searchProduct}
                            onChange={handleSearchChange}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-light" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="filter-group">
                        <header className="card-header">
                            <a
                                href="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse_2"
                                aria-expanded="true"
                                className="d-flex text-decoration-none align-items-baseline text-dark"
                            >
                                <i className="icon-control fa fa-chevron-down me-1 text-white" />
                                <h6 className="text-white">Price Range</h6>
                            </a>
                        </header>
                        <div className="filter-content collapse show" id="collapse_2">
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(parseInt(e.target.value))}
                                    />
                                    <label htmlFor="" className="ms-5 text-white">
                                        {minPrice} $
                                    </label>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                    />
                                    <label htmlFor="" className="ms-5 text-white">
                                        {maxPrice} $
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-outline-light mt-3" onClick={handleFilterApply}>
                            Apply Now
                        </button>
                    </div>
                </aside>
                <div className="col-md-9 col-12 Productdetails">
                    <div className="row">
                        {filteredProducts.map((product, index) => (
                            <div className="col-md-6 col-xl-4 col-12 mb-4" key={index}>
                                <Allproduct Image={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;
