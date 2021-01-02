import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ImageUploadMultiple(props) {

    const [previewfiles, setPreviewFiles] = useState([]);
    const [files, setFiles] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const filePickerRef = useRef();
    // console.log(files)

    useEffect(() => {
        if (!props.modeDisplay) {
            setPreviewFiles([]);
            setFiles([]);
        }
        return () => {
            //
        }
    }, [props.modeDisplay])


    const pickedHandler = e => {
        console.log(e.target.files)
        let temporaryArr;
        if (e.target.files) {
            // covert e.target.files to be a new array
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            setPreviewFiles((prevImages) => prevImages.concat(filesArray));
            // submit files first.
            if (files.length === 0) {
                setFiles(e.target.files);
                temporaryArr = [...e.target.files]
            }
            // submit files morn than 1.
            else {
                temporaryArr = [...files, ...e.target.files]
                setFiles(temporaryArr)
            }
            // save files to a main variant.
            props.onInput(props.id, temporaryArr, true)
            props.onInput('images', props.defaultImages, true)
        }
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    const deleteImage = async (image, index) => {
        // set new array of files variant that will be saved on database.
        // ***** coding this below line later *****

        // set new array of previewfiles variant after deleting a image.
        const delImg = await previewfiles.filter((prevImages) => prevImages !== image);
        // console.log(delImg.length)
        setPreviewFiles(delImg);
        props.onInput(props.id, delImg, true)

        if (delImg.length === 0) {
            setPreviewFiles([]);
            setFiles([]);
        }

        // if length of images and new images variant equals 0, it can't save data
        if (props.defaultImages.length === 0 && delImg.length === 0) {
            props.onInput('images', props.defaultImages, false)
            props.onInput(props.id, null, false)
        }
    }

    const renderPhotos = (source) => {
        return source.map((photo, index) => {
            // return <img src={photo} alt="" key={photo} />
            return <SwiperSlide className="slide-img" key={photo} >
                <img src={photo} alt="" />
                <div className="cancle" onClick={() => deleteImage(photo, index)}><span>x</span></div>
            </SwiperSlide>
        })
    }

    return (
        <div className="form-control">
            <input
                id={props.id}
                ref={filePickerRef}
                style={{ display: 'none' }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={pickedHandler}
                multiple
            />
            <div className={`images-upload ${props.center && 'center'}`}>
                {/* <div className="image-upload__preview">
                {previewUrl && <img src={previewUrl} alt="Preview" />}
                {!previewUrl && <p>Please pick an image.</p>}
            </div> */}
                <div className="images-upload__preview">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation
                        scrollbar={{ draggable: true }}
                    >
                        {renderPhotos(previewfiles)}
                    </Swiper >

                </div>
                <button type="button" className="btn btn-submit" onClick={pickImageHandler}>
                    NEW IMAGES
            </button>
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    )
}

export default ImageUploadMultiple
