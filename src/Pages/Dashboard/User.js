import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import MakeAdmin from './MakeAdmin';
import Loading from '../Shared/Loading'

const User = () => {
    // const [user] = useAuthState(auth);
    const { data: users, loading, refetch } = useQuery('users', () => fetch('https://radiant-shelf-47828.herokuapp.com/user').then(res => res.json()))
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>Total User:{users?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full table-normal">

                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <MakeAdmin
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></MakeAdmin>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;