import React from 'react';
import { services } from '../../lib/services';
import ServicesCard from '../components/card/ServicesCard';

const Services = () => {
    // console.log(services);
    return (
        <div>
            <div className="text-center py-10 px-6 lg:px-20">
                <h3 className="text-red-500 text-lg font-semibold">Service</h3>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Service Area</h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map((service) => (
                        <ServicesCard service={service} key={service._id} />
                    ))
                }
            </div>
        </div>
    );
}

export default Services;
