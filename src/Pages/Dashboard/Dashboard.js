import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (

        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-purple-500 my-2 font-semibold text-2xl'>Welcome to your Dashboard</h1>
                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='/dashboard/myOrder'>My Order</Link></li>
                    <li><Link to='/dashboard/addReview'>Add a Review</Link></li>
                    {admin && <li><Link to='/dashboard/user'>All Users</Link></li>}
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;