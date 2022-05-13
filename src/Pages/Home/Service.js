import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import dentalCare from '../../assets/images/treatment.png'

const Service = () => {
    return (
        <section className='my-24'>
            <div className='text-center'>
                <h3 className="font-bold text-slate-500 text-xl">Our Services</h3>
                <h2 className="font-bold text-4xl">Services we provide</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-12 my-4">
                <div className="card bg-base-100 shadow-xl shadow-cyan-500">
                    <figure className="px-10 pt-10">
                        <img src={fluoride} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl shadow-cyan-500">
                    <figure className="px-10 pt-10">
                        <img src={cavity} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl shadow-cyan-500">
                    <figure className="px-10 pt-10">
                        <img src={teeth} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={dentalCare} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='px-12'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care On Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-primary border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;