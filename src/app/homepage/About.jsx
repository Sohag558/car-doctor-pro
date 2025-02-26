import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 lg:py-20">
            {/* Left Side - Images */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
                <img src="/assets/images/about_us/person.jpg" alt="Mechanic" className="w-3/4 lg:w-3/5 rounded-lg" />
                <img src="/assets/images/about_us/parts.jpg" alt="Tools" className="absolute bottom-0 right-0 w-1/2 lg:w-1/3 border-4 border-white rounded-lg" />
            </div>
            
            {/* Right Side - Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:pl-10">
                <h3 className="text-red-500 text-lg font-semibold">About Us</h3>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">We are qualified & have experience in this field</h2>
                <p className="text-gray-600 mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                <p className="text-gray-600 mb-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                <button className="btn btn-primary btn-outline px-6 py-3 rounded-lg font-semibold">Get More Info</button>
            </div>
        </div>
    );
};

export default About;
