import React from "react"
import { Link, useParams } from "react-router-dom";
import images from "../Images";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaArrowLeft } from "react-icons/fa";




function SingleImage() {
    const {ImageId} = useParams()
    const imgs = images.find((img) => img.id == ImageId)
    
    const {img, type} = imgs
    
    return (
        <div className="slide-container">
       <Link to="/portfolio"><FaArrowLeft className="arrow" /></Link> 
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img src={img} alt={type} /></SwiperSlide>
                <SwiperSlide><img src={img} alt={type} /></SwiperSlide>
                <SwiperSlide><img src={img} alt={type} /></SwiperSlide>
                <SwiperSlide><img src={img} alt={type} /></SwiperSlide>
                <SwiperSlide><img src={img} alt={type} /></SwiperSlide>
                <SwiperSlide><img src={img} alt={type} /></SwiperSlide>
                ...
            </Swiper>
        </div>
        
    )
}

export default SingleImage