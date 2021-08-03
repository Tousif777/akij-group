import React from 'react';



const Featured = () => {

    return (
        <div className="w-full container mx-auto">
            <h1 className="text-3xl font-medium text-center my-5">Featured</h1>
            <div className="w-full flex flex-wrap justify-center items-center"> 
                <div className="w-1/3  h-52 flex overflow-hidden justify-center items-center shadow-lg rounded-lg mb-5">
                    <img className="" src="/slider/slide-1.jpg" alt="" />
                </div>
                <div className="w-1/3  h-52 flex overflow-hidden justify-center items-center shadow-lg rounded-lg mb-5">
                    <img src="/slider/slide-2.jpg" alt="" />
                </div>
                <div className="w-1/3 h-52 flex overflow-hidden justify-center items-center shadow-lg rounded-lg mb-5">
                    <img src="/slider/slide-3.jpg" alt="" />
                </div>
                <div className="w-1/3 h-52 flex overflow-hidden justify-center items-center shadow-lg rounded-lg mb-5">
                    <img src="/slider/slide-4.jpg" alt="" />
                </div>
                <div className="w-1/3 h-52 flex overflow-hidden justify-center items-center shadow-lg rounded-lg mb-5">
                    <img src="/slider/slide-5.jpg" alt="" />
                </div>
            </div>
        </div>
    )
};

export default Featured;