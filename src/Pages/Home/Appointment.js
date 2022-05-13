import React from 'react';
import doctor from '../../assets/images/doctor.png'
import doctorBg from '../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <div style={{background: `url(${doctorBg})`}} className="px-12">
            <div className="flex items-center">
                <div>
                    <img className='mt-[-100px]' src={doctor} alt="" />
                </div>
                <div>
                    <h4 className='font-bold text-slate-400 text-xl mb-3'>Appointment</h4>
                    <h2 className='text-3xl text-white font-bold mb-3'>Make an appointmnet today</h2>
                    <p className='text-white mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum suscipit blanditiis, itaque maiores consequatur velit dolorem impedit rem aperiam ad accusamus vel, voluptatibus id corrupti inventore libero labore officiis, commodi laboriosam quam maxime quas sequi! Optio amet dolorem soluta facilis!</p>
                    <button className='btn bg-gradient-to-r from-primary border-0'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;