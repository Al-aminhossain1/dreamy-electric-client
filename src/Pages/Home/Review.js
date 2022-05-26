import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://radiant-shelf-47828.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <div>
            <h1 className='text-3xl font-semibold text-center text-cyan-400'>Our Customer Says</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-10'>
                {
                    reviews.map(review => <div className="card px-10 w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>{review.description}</p>
                            <div className="card-actions mt-3">
                                <div className=' pl-3 justify-center items-center'>
                                    <h1>{review?.name}</h1>
                                    <p>{review?.location}</p>
                                    <p>Rating: <div className="rating rating-sm">
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                    </div></p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Review;