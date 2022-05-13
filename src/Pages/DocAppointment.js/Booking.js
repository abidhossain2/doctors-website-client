import React from 'react';
import { format } from 'date-fns';

const Booking = ({ treatment, date }) => {
    const { name, slots } = treatment;

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <input type="text" value={format(date, 'PP')} className="block mx-auto mt-5 mb-5 input w-full max-w-xs bg-slate-200" readOnly />
                    <select className="select bg-slate-200 w-full max-w-xs block mx-auto mb-5">
                        {
                            slots.map(slot => <option>{slot}</option>)
                        }
                    </select>
                    <input type="text" placeholder='Name' className="block mx-auto mb-5 input w-full max-w-xs bg-slate-200"/>
                    <input type="text" placeholder='Email' className="block mx-auto mb-5 input w-full max-w-xs bg-slate-200"/>
                    <input type="text" placeholder='Phone' className="block mx-auto mb-5 input w-full max-w-xs bg-slate-200"/>
                    <input type='submit' value="Submit" className="block mx-auto input w-full max-w-xs bg-slate-500 text-white cursor-pointer"/>
                </div>
            </div>
        </div>
    );
};

export default Booking;