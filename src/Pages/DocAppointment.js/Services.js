import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import Service from './Service';

const Services = ({date}) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            { treatment && <Booking date={date} treatment={treatment}></Booking>}
        </>

    );
};

export default Services;