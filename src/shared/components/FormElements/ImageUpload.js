import React, { useRef, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import './ImageUpload.css';

library.add(fas);


const ImageUpload = props => {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);
    const filePickerRef = useRef();

    useEffect(() => {
        if (props.initialValue) {
            if(file) {
                props.onInput(props.id, file, true)
            } else {
                setPreviewUrl(props.initialValue);
                props.onInput(props.id, props.initialValue, props.initialValid)
            }
        }

        if (!file) return;

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);

    }, [file, props.initialValue]);

    const pickedHandler = event => {
        let pickedFile;
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        }
        props.onInput(props.id, pickedFile, fileIsValid);
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    const deleteImage = () => {
        setPreviewUrl(false);
        props.onInput(props.id, null, true);
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
            />
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview" style={{  display: !previewUrl && 'none'}} >
                    {previewUrl && <img src={previewUrl} alt="Preview" />}
                    {props.initialValue ? null : previewUrl && <div className="cancle-single-img" onClick={deleteImage}><span>x</span></div>}
                </div>
                <button type="button" className="btn btn-submit" onClick={pickImageHandler}>
                    <FontAwesomeIcon icon={['fas', 'camera']} size="2x" style={{ color: 'white' }} />
                </button>
            </div>
            {/* {!isValid && <p>{props.errorText}</p>} */}
        </div>
    );
};

export default ImageUpload;