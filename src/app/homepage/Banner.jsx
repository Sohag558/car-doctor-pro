import React from 'react';

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages available, but the majority have suffered alteration in some form.",
        image: "/assets/images/banner/1.jpg",
        id: "slide1",
        next: "#slide2",
        prev: "#slide6",
    },
    {
        title: "Expert Car Repair Services",
        description: "We provide top-notch car repair services ensuring safety and efficiency.",
        image: "/assets/images/banner/2.jpg",
        id: "slide2",
        next: "#slide3",
        prev: "#slide1",
    },
    {
        title: "Quality Parts & Accessories",
        description: "Get genuine car parts and accessories at affordable prices.",
        image: "/assets/images/banner/3.jpg",
        id: "slide3",
        next: "#slide4",
        prev: "#slide2",
    },
    {
        title: "24/7 Customer Support",
        description: "Our team is always ready to assist you with your car-related queries.",
        image: "/assets/images/banner/4.jpg",
        id: "slide4",
        next: "#slide5",
        prev: "#slide3",
    },
    {
        title: "Fast & Reliable Service",
        description: "We ensure quick and efficient service to get you back on the road.",
        image: "/assets/images/banner/5.jpg",
        id: "slide5",
        next: "#slide6",
        prev: "#slide4",
    },
    {
        title: "Best Prices Guaranteed",
        description: "We offer the most competitive prices for all our services.",
        image: "/assets/images/banner/6.jpg",
        id: "slide6",
        next: "#slide1",
        prev: "#slide5",
    },
];

const Banner = () => {
    return (
        <div className="carousel w-full h-[90vh] rounded-xl relative">
            {banners.map((banner) => (
                <div key={banner.id} id={banner.id} className="carousel-item relative w-full h-full flex items-center justify-start text-white">
                    <img src={banner.image} alt={banner.title} className="absolute w-full h-full object-cover" />
                    <div className="relative z-10  p-10 ml-20 rounded-lg max-w-lg">
                        <h1 className="text-5xl font-bold mb-4">{banner.title}</h1>
                        <p className="text-lg mb-6">{banner.description}</p>
                        <div className="flex gap-4">
                            <button className="btn btn-primary text-white px-6 py-3 rounded-lg font-semibold">Discover More</button>
                            <button className="btn btn-primary btn-outline px-6 py-3 rounded-lg font-semibold">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute space-x-2 flex bottom-12 right-12 transform justify-between z-10">
                        <a href={banner.prev} className="btn btn-circle bg-gray-900 text-white">❮</a>
                        <a href={banner.next} className="btn btn-circle bg-gray-900 text-white">❯</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Banner;