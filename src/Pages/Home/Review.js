import React from 'react';
import people1 from '../../asets/image/people1.png'
import people2 from '../../asets/image/people2.png'
import people3 from '../../asets/image/people3.png'

const Review = () => {
    const reviews = [
        {
            name: "Mokbul",
            img: people1,
            location: " kataban",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpasit error, unde libero accusamus atque "
        },
        {
            name: "Newton",
            img: people2,
            location: "bandarban",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpasit error, unde libero accusamus atque "
        },
        {
            name: "Tom cures",
            img: people3,
            location: "anodrkilla",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpasit error, unde libero accusamus atque "
        }
    ]
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center text-cyan-400'>Our Customer Says</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
                {
                    reviews.map(review => <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p>{review.review}</p>
                            <div class="card-actions mt-3">
                                <div class="avatar ">
                                    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review.img} alt="review person" />
                                    </div>

                                </div>
                                <div className=' pl-3 justify-center items-center'>
                                    <h1>{review.name}</h1>
                                    <p>{review.location}</p>
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