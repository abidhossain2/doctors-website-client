import React from 'react';
import clock from '../assets/icons/clock.svg'
import marker from '../assets/icons/marker.svg'
import phone from '../assets/icons/phone.svg'

const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12 px-12'>
            <div className="card shadow-xl bg-slate-400">
                <div className="card-body">
                    <div className="flex items-center">
                        <div>
                            <img src={clock} alt="" />
                        </div>
                        <div className="ml-6 text-white">
                            <h2 className="card-title">Opening Hour</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-accent shadow-xl">
                <div className="card-body flex">
                    <div className="flex items-center">
                        <div>
                            <img src={marker} alt="" />
                        </div>
                        <div className="ml-6 text-white">
                            <h2 className="card-title">Our Location</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-pink-400 shadow-xl">
                <div className="card-body flex">
                    <div className="flex items-center">
                        <div>
                            <img src={phone} alt="" />
                        </div>
                        <div className="ml-6 text-white">
                            <h2 className="card-title">Contact Us</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;