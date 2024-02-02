import '../links/css/imageGallery.css';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/mousewheel"
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { Navigation, EffectFade, FreeMode, Thumbs, Autoplay } from "swiper/modules";
import image1 from '../links/img/galleryPhoto/1.jpg'
import image2 from '../links/img/galleryPhoto/2.jpg'
import image3 from '../links/img/galleryPhoto/3.jpg'
import image4 from '../links/img/galleryPhoto/4.jpg'
// import image5 from '../Images/GalleryPhoto/4.jpg'
const ImageGallery = () => {
    return (
        <div className='imageGallery'>

            <h2 className='subtitle '>SHILP<br />Through the years</h2>

            <Swiper
                  data-aos="fade-down"
                  data-aos-offset="5"
                  data-aos-delay="50"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-navigation-size": "25px",
                    "--swiper-animation-speed": "8000",
                    width:'70%',
                    height:'70%',
                    marginBottom:'8px'
                }}
  
                autoplay={true}
                loop={true}
                spaceBetween={10}
                navigation={true}
                // effect={'fade'}
                modules={[FreeMode, Navigation, Thumbs, EffectFade, Autoplay]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={image1} alt="" className='md:w-full object-cover' width="100%" height="100%"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" className='md:w-full object-cover' width="100%" height="100%"/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={image3} alt="" className='md:w-full object-cover' width="100%" height="100%"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" className='md:w-full object-cover' width="100%" height="100%"/>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <img src={image5} alt="" className='md:w-full object-cover'/>
                </SwiperSlide> */}


            </Swiper>


        </div>
    )
}

export default ImageGallery