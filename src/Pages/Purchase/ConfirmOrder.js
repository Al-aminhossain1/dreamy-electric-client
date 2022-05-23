import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const ConfirmOrder = ({ tool }) => {
    const [user] = useAuthState(auth);
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-xl text-primary font-medium">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <input type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                <input type="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Enter you Address" class="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                <input type="text" value={tool.name} class="input input-bordered w-full max-w-xs" />
                <input type="number" value={tool.name} placeholder="Minimum order 100" class="input input-bordered w-full max-w-xs" />
                {/* <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" /> */}

                <button className='btn'>Order</button>
            </div>
        </div>
    );
};

export default ConfirmOrder;