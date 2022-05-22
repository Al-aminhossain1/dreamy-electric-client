import React from 'react';

const Login = () => {
    return (
        <div class="card w-full max-w-lg mx-auto justify-center items-center  shadow-xl">
            <div class="card-body">
                <h2 class=" text-center text-2xl font-medium text-lime-600">Login</h2>
                <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Login;