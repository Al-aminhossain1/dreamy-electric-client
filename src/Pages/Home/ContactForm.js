import React from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const handelContactForm = event => {
        event.preventDefault();
        toast('Thanks for Contact with Us');
    }
    return (
        <div className='text-center bg-slate-700 my-20 px-5  py-14'>
            <h1 className='text-secondary text-2xl font-semibold'>Contact Us</h1>
            <p className='text-4xl text-white '>Stay Connected With Us</p>
            <form onSubmit={handelContactForm} className='' >
                <input type="email" placeholder="Email Address" className="input my-5 w-full max-w-lg" required /> <br />
                <input type="text" placeholder="Subject" className="input w-full max-w-lg" required /><br />
                <textarea style={{ height: '148px' }} className="textarea w-full max-w-lg mt-5" placeholder="Your Message" required></textarea><br />
                <input className='btn btn-accent w-full max-w-lg text-white' type="submit" value="Submit"></input>
            </form>
        </div>
    );
};

export default ContactForm;