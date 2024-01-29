import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../Redux/Cartslice';

const AddToCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.Cartitems);

    const handleIncrement = (itemId) => {
        dispatch(cartActions.incrementQuantity(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(cartActions.decrementQuantity(itemId));
    };

    const handleRemove = (itemId) => {
        dispatch(cartActions.removeItem(itemId));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.Price * item.quantity, 0);
    };

    return (
        <div className="container-fluid">
            <div className="table-responsive">
            <table className="table" style={{ backgroundColor: 'transparent' }}>                    {
                        window.location.pathname == '/' ? ('') : (
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        )
                    }
                    <tbody>
                        {cartItems.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img
                                        src={item.Image}
                                        alt={item.Title}
                                        className="img-fluid"
                                        style={{ maxWidth: '50px', maxHeight: '50px' }}
                                    />
                                </td>
                                <td>{item.Title}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <button className='btn btn-outline-dark btn-sm' onClick={() => handleDecrement(item.id)}>-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button className='btn btn-outline-dark btn-sm' onClick={() => handleIncrement(item.id)}>+</button>
                                    </div>
                                </td>
                                <td>${item.Price}</td>
                                <td>${item.Price * item.quantity}</td>
                                <td>
                                    <button className='btn btn-outline-danger btn-sm' onClick={() => handleRemove(item.id)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-right">
                <strong>Total Price: ${calculateTotalPrice()}</strong>
            </div>
        </div>
    );
};

export default AddToCart;
