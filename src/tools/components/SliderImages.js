import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { SliderData } from "./SlideData";

import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./SliderImages.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function SliderImages() {

    // const lengthImage = SliderData.length;
    const [introImage, setIntroImage] = useState('')

    useEffect(() => {
        setIntroImage(SliderData[0].image);
        return () => {
            //
        }
    }, [])

    return (
        <div>
            <div className="intro-img">
                {/* <img src="https://images.unsplash.com/photo-1607053075432-9036f44e98ef?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="555" /> */}
                <img src={introImage} alt="555" />

            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {SliderData.map((slide, index) => (
                    <SwiperSlide className="slide-img" key={index} onClick={() => setIntroImage(slide.image)} ><img src={slide.image} alt={index} /></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SliderImages
