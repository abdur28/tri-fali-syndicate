'use client'

import { A11y, Navigation, Pagination, Parallax } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import FancyBox from "../fancyBox";

const images = ["/site-layout.png", "/ground-floor.png", "/1st-floor.png", "/2nd-floor.png", "/elevation.png", "/rear-elevation.png"]

const Gallery = () => {
    return (
        <div className="py-10 md:px-10 my-10">
            <Swiper
            modules={[Navigation, Pagination, A11y, Parallax]}
            slidesPerView={1}
            loop={true}
            navigation
            pagination
            parallax
            >
                {images.map((image, index) => (
                    <SwiperSlide
                    key={index}
                    className="w-full h-full"
                    >
                        <FancyBox>
                            <div className="w-full h-full flex flex-row justify-center items-center">
                                <a href={image} data-fancybox  className="w-full md:w-1/2 h-full" >
                                    <Image
                                        src={image}
                                        alt="image"
                                        width={1920}
                                        height={1080}
                                        className=""
                                        />  
                                </a> 
                            </div>
                        </FancyBox>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Gallery