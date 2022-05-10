import React from 'react';
import chair from '../assets/images/chair.png'
import backImg from '../assets/images/bg.png'

const Banner = () => {
    return (
        <section style={{background:`url(${backImg})`, backgroundSize:'cover', backgroundPosition:'bottom'}}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse px-1">
                    <img  src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-primary border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;