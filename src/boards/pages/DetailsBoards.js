import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SliderImages from "../../shared/components/UIElements/SliderImages";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/Auth-Context";

import "./DetailsBoard.css"
import "../../shared/components/FormElements/Button.css"
import DescriptionBoard from '../components/DescriptionBoard';
import TableDetailBoard from '../components/TableDetailBoard';
import { ItemBoardAction } from "../../actions/boardAction";

function DetailsBoards() {

    const auth = useContext(AuthContext)
    const dispatch = useDispatch();
    const boardList = useSelector((state) => state.boardItem);
    const { board, loading, error } = boardList;
    const [modeDisplay, setModeDisplay] = useState(false);

    useEffect(() => {
        dispatch(ItemBoardAction())
        return () => {

        }
    }, [board])

    const [formState, inputHandler, setFormData] = useForm(
        {
            name: {
                value: '',
                isValid: false
            },
            type: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            image: {
                value: null,
                isValid: false
            },
            images: {
                value: null,
                isValid: false
            },
            newImages: {
                value: null,
                isValid: false
            }
        },
        false
    );

    const handleSave = () => {
        setModeDisplay(false)
        console.log(formState.inputs);
    }


    return (
        <div className="header-detail">
            { !auth.statusId ? null :
                <div className="box-button">
                    <button className="btn btn-secondary" onClick={() => setModeDisplay(!modeDisplay)}>Edit</button>
                </div>
            }
            <div className="container-detail">
                <SliderImages SliderData={board.images}
                    modeDisplay={modeDisplay}
                    inputHandler={inputHandler}
                    imageProfile={board.imageProfile} />
                <DescriptionBoard name={board.nameBoard} des={board.description} type={board.type} modeDisplay={modeDisplay} inputHandler={inputHandler} />
            </div>
            <TableDetailBoard tools={board.tools} />
            <div>
                {modeDisplay &&
                    <button className="btn btn-success"
                        disabled={!formState.isValid} style={{ marginRight: '1rem' }}
                        onClick={handleSave}>
                        Save
                </button>}
                <Link to="/boards"><button className="btn btn-back">Back</button></Link>
            </div>
        </div>
    )
}

export default DetailsBoards
