import React from 'react';
import notfound from '../asets/image/notfound.jpg'

const NotFound = () => {
    return (
        <div className=''>
            <h1 className='text-center font-bold text-3xl text-cyan-500 my-8'>Looking this page you are not available right now</h1>
            <div className='min-w-lg flex justify-center'>
                <img src={notfound} alt="" /></div>
        </div>
    );
};

export default NotFound;