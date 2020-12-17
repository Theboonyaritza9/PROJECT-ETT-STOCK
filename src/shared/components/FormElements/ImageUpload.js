import React, { useRef, useState, useEffect } from 'react';

const ImageUpload = props => {
    const [file, setFile] = useState();
    // const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();
    // console.log(props.imageProfile)


    useEffect(() => {
        if (props.imageProfile) {
            // console.log(props.imageProfile)
            // const fileReader = new FileReader();
            if (!file) {
                setIsValid(true)
                props.onInput(props.id, props.imageProfile, true);
                // fileReader.readAsDataURL(file);
            }
        }
        if (props.lengthofImages && !file) {
            setIsValid(false);
            // props.onInput(props.id, null, false)
        }
        if (!file) {
            return;
        }

        // const fileReader = new FileReader();
        // fileReader.onload = () => {
        //     setPreviewUrl(fileReader.result);
        // };
        // fileReader.readAsDataURL(file);
        // props.onInput(props.id, previewUrl, true);
    }, [file, props.imageProfile]);

    const pickedHandler = event => {
        // console.log("Array", event.target.files)
        // console.log("Single", event.target.files)
        let pickedFile;
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1 && props.id === 'image') {
            // console.log("Image")
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else if (event.target.files && event.target.files.length > 0) {
            // console.log("ImageArray")
            pickedFile = event.target.files;
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
            props.onInput("images", props.newSlide, true);
        }
        else {
            setIsValid(false);
            fileIsValid = false;
        }
        props.onInput(props.id, pickedFile, fileIsValid);

        // props.onInput(props.id, [...pickedFile, ...props.newSlider], fileIsValid);
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    return (
        <div className="form-control">
            <input
                id={props.id}
                ref={filePickerRef}
                style={{ display: 'none' }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={pickedHandler}
                multiple={props.multiple}
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                {/* <div className="image-upload__preview">
                    {previewUrl && <img src={previewUrl} alt="Preview" />}
                    {!previewUrl && <p>Please pick an image.</p>}
                </div> */}
                <button type="button" className="btn btn-secondary" onClick={pickImageHandler}>
                    PICK IMAGE
                </button>
            </div>
            {!isValid && <p>{props.errorText}</p>}
        </div>
    );
};

export default ImageUpload;