import React from 'react';
import formbg from '../../assets/images/appointment.png'

const Form = () => {
    return (
        <section style={{ background: `url(${formbg})` }} className="mt-48">
            <div className="text-center py-10">
                <h4 className='text-slate-500 text-xl'>Contact Us</h4>
                <h3 className='text-white text-4xl'>Stay Connected With Us</h3>
            </div>
            <div className='pb-24'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs block mx-auto" /> <br /> <br />

                <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs block mx-auto" /> <br /> <br />
                <textarea className="textarea  w-full max-w-xs block mx-auto" placeholder="Your message"></textarea>
                <br /> 
                <button className='btn bg-gradient-to-r from-primary border-0 block mx-auto'>Submt</button>
            </div>
        </section>
    );
};

export default Form;