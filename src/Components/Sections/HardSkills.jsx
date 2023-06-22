import React from 'react'
import { languages } from '../../Utils/Projects'
import './Sections-styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper'
const HardSkills = () => {


    return (
        <section>

            <h2 className='title-section' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-delay='500'>Hard Skills</h2>

            <div className='section-separation carousel-container'>


                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 5
                        },
                        320: {
                            slidesPerView: 1
                        }
                    }

                    }
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        stopOnLastSlide: false
                        // disableOnInteraction: true,
                        // reverseDirection: true

                    }}
                    pagination={{
                        el: ".pagination",

                        clickable: false
                    }}
                    navigation={{

                    }}
                    effect={'coverflow'}
                    // grabCursor={true}
                    spaceBetween={50}
                    loop={true}
                    slidesPerView={5}
                    coverflowEffect={{
                        scale: 1,
                        rotate: 0,
                        slideShadows: false,
                        modifier: 1.5,
                        stretch: 10

                    }}
                    className='carousel'
                >
                    <SwiperSlide>
                        <img className='carousel-logo' src="/assets/bootstrap-logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carousel-logo' src="/assets/CSS-logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carousel-logo' src="/assets/html-logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carousel-logo' src="/assets/js-logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carousel-logo' src="/assets/tailwind-logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carousel-logo' src="/assets/python-logo.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='carousel-logo' src="/assets/react-logo.png" alt="" />
                    </SwiperSlide>
                    <div className='pagination'></div>
                </Swiper>
            </div>
        </section>
    )
}

export default HardSkills