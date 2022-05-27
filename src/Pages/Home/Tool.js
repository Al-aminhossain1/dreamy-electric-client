import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { name, price, img, description, available, _id } = tool;
    return (
        <div className="card card-side  shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-purple-900 text-semibold">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Available Quantity: {available}</p>
                <p>Minimum order:100</p>
                <div className="card-actions  justify-center">
                    <Link to={`/purchase/${_id}`}><button className="btn btn-success w-full">Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;