import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import FeatureVehicleCard from '../../UI/FeatureVehicleCard/FeatureVehicleCard';
import classes from './Featured.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import features from '../../DUMYY_DATA/featured';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

const Featured = () => {
  return (
    <div className={`w-full container mx-auto`}>
      <div className={classes.Featured__elements}>
        <h1
          className={`${classes.headline} my-5 text-3xl font-medium text-center`}
        >
          Featured Vehicles
        </h1>

        <Swiper
          breakpoints={{
            220: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay
          navigation={true}
          className="mySwiper"
          effect="fade"
        >
          {features &&
            features.map((feature) => {
              return (
                <SwiperSlide key={feature.id}>
                  <FeatureVehicleCard
                    title={feature.title}
                    img={feature.img}
                    url={feature.url}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
