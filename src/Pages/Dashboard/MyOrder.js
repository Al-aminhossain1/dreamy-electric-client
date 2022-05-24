import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?customer=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setOrders(data)
                })
        }
    }, [user])
    return (
        <div>
            <h1 className=' text-cyan-500 my-2 ' >Your total order: {orders.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Tool</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* * <!-- row 1 -->  */}

                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user?.email}</td>
                                <td>{user?.displayName}</td>
                                <td>{order.tool}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder