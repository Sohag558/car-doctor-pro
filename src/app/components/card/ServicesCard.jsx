import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, img, price } = service || {};
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={img}
                        alt="title" height={120} width={430} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    
                    <div className="card-actions justify-between items-center">
                    <h6 className="text-primary font-semibold">Price : ${price}</h6>
                        <button className="btn btn-primary btn-outline">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesCard;
