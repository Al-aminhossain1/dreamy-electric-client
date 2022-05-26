import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Progress from './Progress';
import Review from './Review';
import Tools from './Tools';


const Home = () => {
    return (
        <div>
            {/* <h1 className=" text-center text-4xl font-bold text-purple-400">Welcome to Dreamy Electric</h1> */}
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <ContactForm></ContactForm>
            <Progress></Progress>
            <Footer></Footer>
        </div >
    );
};

export default Home;