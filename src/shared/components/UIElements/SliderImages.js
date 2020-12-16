import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { SliderData } from "./SlideData";
import ImageUpload from "../FormElements/ImageUpload";

import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./SliderImages.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function SliderImages(props) {

    const [introImage, setIntroImage] = useState('');
    const [newSlider, setNewSlider] = useState([])
    const sliderData = props.SliderData;
    const { imageProfile, inputHandler, modeDisplay } = props
    const [count, setCount] = useState(0)


    // console.log(count)
    // console.log(newSlider.length === 0 ? true : false)


    useEffect(() => {
        if (imageProfile && sliderData) {
            // console.log(newSlider.length === 0 ? true : false)
            // console.log(modeDisplay)
            if (sliderData.length > count || !modeDisplay) {
                // console.log('morn than')
                setCount(sliderData.length)
                setIntroImage(imageProfile);
                setNewSlider(sliderData);
                inputHandler("images", sliderData, true)

            } else {
                inputHandler("images", newSlider, true)
                if(newSlider.length === 0) {
                    inputHandler("images", null, false)
                }
            }
        }
        return () => {
        }
    }, [imageProfile, newSlider, modeDisplay])

    const deleteImage = (data) => {
        // console.log('Delete', data)
        setNewSlider(newSlider.filter(res => res !== data));
        // setCount(count === 0 ? 0 : count - 1);
        // console.log(newSlider)
        // inputHandler("images", ["/images/b1.png", "/images/b3.jpg", "/images/detailTool.jpg"], true)
    }

    return (
        <div>
            <div className="intro-img">
                <img src={introImage} alt="555" />
            </div>
            {/* { props.modeDisplay && <input type="file" style={{ marginBottom: '1rem' }} />} */}
            { props.modeDisplay && <ImageUpload
                center
                id="image"
                onInput={inputHandler}
                imageProfile={imageProfile}
                errorText="Please provide an image."
                multiple={false}
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
                    {newSlider.map((slide, index) => (
                        <SwiperSlide className="slide-img" key={index} onClick={() => setIntroImage(slide)} >
                            <img src={slide} alt={index} />
                            { props.modeDisplay && <div className="cancle" onClick={() => deleteImage(slide)}><span>x</span></div>}
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
            { props.modeDisplay && <ImageUpload
                center
                id="images"
                onInput={inputHandler}
                imageProfile={imageProfile}
                errorText="Please provide an image."
                multiple={true}
                lengthofImages={newSlider.length === 0 ? true : false}
                newSlider={newSlider}
            />}

        </div>
    )
}

export default SliderImages
