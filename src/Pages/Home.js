import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Footer from './Footer';
import Form from './Form';
import InfoCard from './InfoCard';
import Service from './Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Service></Service>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Form></Form>
            <Footer></Footer>
        </>

    );
};

export default Home;