import React from 'react';

const Service = ({ service, setTreatment}) => {
    const { name, slots } = service;
    
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{slots[0]}</p>
                <p>{slots.length} spaces available</p>
                <label htmlFor="my-modal-6" className="btn bg-gradient-to-r from-green-400 to-blue-300  text-white border-0" onClick={() => setTreatment(service)}>Book Appointment</label>
            </div>
        </div >
    );
};

export default Service;