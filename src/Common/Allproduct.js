import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Redux/Cartslice';

const Allproduct = (props) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        const { Id, Title, Description, Image, Price } = props.Image;
        dispatch(cartActions.addItem({ Id, Title, Description, Image, Price }));
    };

    return (
        <div className="shadow Card rounded rounded-2 p-3 BlurBg">
            <Link to={`/Products/${props.Image.Id}`}>
                <img
                    src={props.Image.Image}
                    alt={props.Image.Title}
                    className="card-img-top m-auto my-3"
                    style={{ objectFit: 'contain', height: '150px' }}
                />
            </Link>
            <div className="card-body text-center text-white">
                <h5 className="card-title">{props.Image.Title}</h5>
                <p className="card-text">{props.Image.Description}</p>
                <p className="card-text">${props.Image.Price}</p>
                <button type="button" className="btn btn-outline-light" onClick={addToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Allproduct;
