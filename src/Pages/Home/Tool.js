import React from 'react';

const Tool = ({ tool }) => {
    const { name, price, img, description, available } = tool;
    return (
        <div class="card card-side  shadow-xl">
            <figure><img src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="card-title text-purple-900 text-semibold">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Available: {available}</p>
                <div class="card-actions  justify-center">
                    <button class="btn btn-success w-full">Order</button>
                </div>
            </div>
            {/* "https://api.lorem.space/image/movie?w=200&h=280" */}
        </div>
    );
};

export default Tool;