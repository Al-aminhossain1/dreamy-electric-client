import React from 'react';

const Progress = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:px-10">
            <div className="card-body ">
                <h2 className="card-title text-4xl ">Overall progress of our business</h2>
                <p className='w-96 pr-5 '>Our business is improving day by day because we have not only come to do business but also to serve my people so we have trained our staff, especially so that they can meet the customer's needs. Our annual revenue is growing every year so we are all happy now.</p>
            </div>
            <div className='grid grid-cols-1 lg:pr-52 px-5 pb-10'>
                <label className="label ">
                    <p className="label-text text-xl">Technology Uses</p>
                    <span className="label-text-alt">80%</span>
                </label>
                <progress className="progress progress-warning w-96 " value="80" max="100"></progress>
                <label className="label ">
                    <p className="label-text text-xl">Our Serviced</p>
                    <span className="label-text-alt">75%</span>
                </label>
                <progress className="progress progress-warning w-96" value="75" max="100"></progress>
                <label className="label ">
                    <p className="label-text text-xl">Customer Satisfactory</p>
                    <span className="label-text-alt">70%</span>
                </label>
                <progress className="progress progress-warning " value="70" max="100"></progress>
                <label className="label ">
                    <p className="label-text text-xl">Our Support</p>
                    <span className="label-text-alt">90%</span>
                </label>
                <progress className="progress progress-warning " value="90" max="100"></progress>
                <label className="label ">
                    <p className="label-text text-xl">Customer Drillings Success</p>
                    <span className="label-text-alt">100%</span>
                </label>
                <progress className="progress progress-warning " value="100" max="100"></progress>
            </div>
        </div>
    );
};

export default Progress;