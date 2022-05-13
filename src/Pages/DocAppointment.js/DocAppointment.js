import React, { useState } from 'react';
import Footer from '../Home/Footer'
import doctorBg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'
import Services from './Services';

const DocAppointment = () => {
    const [date, setDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p className='text-xl text-secondary mb-10'>Appointment is available on {format(date, 'PP')}.</p>;
    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ background: `url(${doctorBg})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl ml-80" alt="" />

                    <DayPicker
                        mode='single'
                        date={date}
                        onSelect={setDate}
                    />

                </div>
            </div>
            <div className='text-center'>
                {footer}
            </div>
            <Services date={date}></Services>
            <Footer></Footer>
        </div>
    );
};

export default DocAppointment;