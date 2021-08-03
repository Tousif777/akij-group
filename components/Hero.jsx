import { sideBarData } from "../sidebardata";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import Image from 'next/image';


SwiperCore.use([Navigation, Autoplay, Pagination]);


const Hero = () => {

    return (
        <div className="slider-section container shadow-md mx-auto max-h-screen bg-gray-50 text-black flex" >
                
                {/* <!-- *************************** Side Menu **************** --> */}
    
                <div className="hidden min-h-full bg-gradient-to-br from-akij-blue to-akij-lblue side-bar md:block md:w-1/5">
                    <ul className="text-xs overflow-visible">
                        {
                            sideBarData.map((item, idx) => {
                                return (
                                    <li key={idx} className="group cursor-pointer px-2 menu-item relative flex justify-between items-center hover:bg-gray-100 hover:font-semibold hover:text-akij-red tracking-wide text-gray-100 border-b border-gray-400 py-1">
                                        <p>{item.name}</p> <i><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" size="18" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg></i>
                                        <div className="hidden group-hover:block sub-menu-item absolute z-50 bg-gray-200 w-full  left-full top-0">
                                            <ul className="text-left">
                                                <li className="py-1 px-2 uppercase hover:bg-gray-100  tracking-wide border-b hover:border-gray-100">
                                                    <a href="#" className="">Durjoy 775 KG Diesel</a>
                                                </li>
                                                <li className="py-1 px-2 uppercase hover:bg-gray-100  tracking-wide border-b hover:border-gray-100">
                                                    <a href="#" className="">Durjoy 775 KG Diesel</a>
                                                </li>
                                                <li className="py-1 px-2 uppercase hover:bg-gray-100  tracking-wide border-b hover:border-gray-100">
                                                    <a href="#" className="">Ponkhiraj 1000 KG Diesel</a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="w-full md:w-4/5">
                    <Swiper
                        navigation
                        autoplay
                        loop
                        pagination={{ clickable: true }}
                        effect="fade">
                        {[1, 2, 3, 4, 5].map((item, el) => {
                           return (
                            <SwiperSlide key={el} className="w-full h-full">
                                <Image width={1200} height={600} src={`/slider/slide-${item}.jpg`} alt="Slider" />
                            </SwiperSlide>);
                        })}
                    </Swiper>
                </div>
        </div>
    )
};

export default Hero;