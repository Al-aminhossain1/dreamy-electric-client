import React from 'react';
import html from '../../asets/skills/html.png'
import css from '../../asets/skills/css.png'
import bootstrap from '../../asets/skills/bootstrap.png'
import tailwind from '../../asets/skills/tailwind.jpg'
import javascript from '../../asets/skills/javascript.png'
import react from '../../asets/skills/react.png'
import firebase from '../../asets/skills/firebase.png'
import github from '../../asets/skills/github.png'
import express from '../../asets/skills/express.png'
import node from '../../asets/skills/node.png'
import mongodb from '../../asets/skills/mongodb.png'

const MyPortfolio = () => {
    return (
        <div className='px-16'>
            <div>
                <h1 className='text-cyan-300 font-bold text-3xl my-5'>Hey,<br />
                    I am Md Al Amin Hossain
                </h1>
                <p className='text-lg font-medium my-2'>Email: md.al.aminhossain1785@gmail.com</p>
                <h2 className='text-lg'>Education:Hsc</h2>
                <h2 className='text-lg'>Institution:Mashundia Bhawanipur K.J.B. Degree College</h2>
            </div>
            <div>
                <h1 className='text-center font-bold text-4xl my-16 text-green-600'>My Skills </h1>
                <div className='grid grid-cols-2 lg:grid-cols-5 gap-y-5'>
                    <img className='w-32' src={html} alt="" />
                    <img className='w-32' src={css} alt="" />
                    <img className='w-32' src={bootstrap} alt="" />
                    <img className='w-32' src={tailwind} alt="" />
                    <img className='w-32' src={javascript} alt="" />
                    <img className='w-32' src={react} alt="" />
                    <img className='w-32' src={firebase} alt="" />
                    <img className='w-32' src={github} alt="" />
                    <img className='w-32' src={express} alt="" />
                    <img className='w-32' src={node} alt="" />
                    <img className='w-32' src={mongodb} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-center font-bold text-4xl my-16 text-green-600'>My Projects </h1>

            </div>
        </div>
    );
};

export default MyPortfolio;