import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


import TableDetailBoard from "../../boards/components/TableDetailBoard";
import { ItemBoardAction } from "../../actions/boardAction";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function HistoryProject() {

    const dispatch = useDispatch();
    const [introImage, setIntroImage] = useState('');
    const [images, setImages] = useState(null);
    const boardList = useSelector((state) => state.boardItem);
    const { board, loading, error } = boardList;

    useEffect(() => {
        dispatch(ItemBoardAction())
        if (board) {
            setIntroImage(board.imageProfile);
            setImages(board.images);
        }
        return () => {

        }
    }, [board])


    return (
        <React.Fragment>
            {loading ? <div>loading...</div> :
                error ? <div>{error}</div> :
                    <div className="header-detail">
                        <h3>To request project of Arduino-v.2</h3>
                        <div className="container-detail">
                            <div>
                                <div className="intro-img">
                                    <img src={introImage} alt="555" />
                                </div>
                                {!images ? <div>Loading...</div> :
                                    <Swiper
                                        spaceBetween={20}
                                        slidesPerView={4}
                                        navigation
                                        scrollbar={{ draggable: true }}
                                    >
                                        {images.map((slide, index) => (
                                            <SwiperSlide className="slide-img" key={index} onClick={() => setIntroImage(slide)} >
                                                <img src={slide} alt={index} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                }
                            </div>
                            <div className="box-description" >
                                <h2>{board.name}</h2>
                                <h3>Board's Description</h3>
                                <div className="detail">
                                    <p>User <span>Boonyarit</span></p>
                                    <p>Total <span style={{marginLeft: "94px"}}>10</span></p>
                                    <p>Date <span style={{marginLeft: "96px"}}>12/12/63</span></p>
                                    <p>Time <span style={{marginLeft: "94px"}}>11.30 am</span></p>
                                    <p>Kind of work <span style={{marginLeft: "40px"}}>{board.type}</span></p>
                                    <div className="footer-detail">
                                        <p>Description</p>
                                        <p>{board.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <TableDetailBoard tools={board.tools} />
                        <div>
                            <Link to="/boards"><button className="btn btn-back">Back</button></Link>
                        </div>
                    </div>
            }
        </React.Fragment>

    )
}

export default HistoryProject