import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { SliderData } from "./SlideData";

import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./SliderImages.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function SliderImages(props) {

    const [introImage, setIntroImage] = useState('');
    const sliderData = props.SliderData;

    useEffect(() => {
        if (sliderData) {
            setIntroImage(sliderData[0])
        }

        return () => {

        }
    }, [sliderData])

    return (
        <div>
            <div className="intro-img">
                <img src={introImage} alt="555" />
            </div>
            { !sliderData ? <div>Loading...</div> :
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {sliderData.map((slide, index) => (
                        <SwiperSlide className="slide-img" key={index} onClick={() => setIntroImage(slide)} >
                                <img src={slide} alt={index} />
                                { props.modeDisplay && <div className="cancle"><span>x</span></div>}
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </div>
    )
}

export default SliderImages
