import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])
    return (
        <div className='flex justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-xl text-primary font-bold">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <p>Available: {tool.available}</p>
                    <input type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs" />
                    <input type="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Enter you Address" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />

                    <input type="number" disabled value={tool.available} class="input input-bordered w-full max-w-xs" />
                    <input type="number" placeholder="Minimum order 10" class="input input-bordered w-full max-w-xs" />
                    {/* <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" /> */}

                    <button className='btn'>Order</button>
                </div>
            </div>

        </div>
    );
};

export default Purchase;