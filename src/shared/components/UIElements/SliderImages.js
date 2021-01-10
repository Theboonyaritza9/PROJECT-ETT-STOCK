import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { SliderData } from "./SlideData";
import ImageUpload from "../FormElements/ImageUpload";
import ImageUploadMultiple from "../FormElements/ImageUploadMultiple";

import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./SliderImages.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function SliderImages(props) {

    const [introImage, setIntroImage] = useState('');
    const [slides, setSlides] = useState([])
    const sliderData = props.SliderData;
    const { imageProfile, inputHandler, modeDisplay } = props
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (imageProfile && sliderData) {
            // set default api
            if (sliderData.length > count || !modeDisplay) {
                setCount(sliderData.length)
                setIntroImage(imageProfile);
                setSlides(sliderData);
                inputHandler("images", sliderData, true)

            }
            // set a new array of default api when you discard a image
            else {
                inputHandler("images", slides, true)
                if (slides.length === 0) {
                    // can't update api, if you dont select a new image or no image's in default api
                    if (!props.newImages || props.newImages.length === 0) {
                        inputHandler("images", null, false)
                        inputHandler("newImages", null, false)
                    }
                    // can update api, provided that you select a new image, althought no image's in default api 
                    else {
                        inputHandler("images", null, true)
                    }
                }
            }
        }
        return () => {
        }
    }, [imageProfile, slides, modeDisplay])

    // delete old images from database
    const deleteImage = (data) => {
        setSlides(slides.filter(res => res !== data));
    }

    return (
        <div>
            <div className="intro-img">
                <img src={introImage} alt="555" />
            </div>
            { modeDisplay && <ImageUpload
                center
                id="newImage"
                onInput={inputHandler}
                errorText="Please provide an image."
            />}
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
                    {slides.map((slide, index) => (
                        <SwiperSlide className="slide-img" key={index} onClick={() => setIntroImage(slide)} >
                            <img src={slide} alt={index} />
                            { props.modeDisplay && <div className="cancle" onClick={() => deleteImage(slide)}><span>x</span></div>}
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
            { modeDisplay && <ImageUploadMultiple
                id="newImages"
                errorText="Please provide an image."
                onInput={inputHandler}
                modeDisplay={modeDisplay}
                defaultImages={slides}
                isValid={props.isValid}
            />
            }
        </div>
    )
}

export default SliderImages
