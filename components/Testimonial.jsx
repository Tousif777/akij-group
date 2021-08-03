import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import TestimonialItem from './TestmonialItem';


SwiperCore.use([ Navigation, Autoplay, Pagination]);

const Testimonial = () => {


    return (
        <div className="w-full">
            <h1 className="py-5 text-3xl text-center font-bold">Testimonial</h1>
            <Swiper className="" navigation loop autoplay pagination>
                <SwiperSlide className="py-7">
                    <TestimonialItem />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialItem />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialItem /> 
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialItem />
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonialItem />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};


export default Testimonial;