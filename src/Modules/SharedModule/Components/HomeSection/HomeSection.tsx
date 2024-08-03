import React from "react";
import HomeSectionImg from "../../../../assets/HomeSectionImg.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css/bundle";

import styles from "./HomeSection.module.css";

export default function HomeSection() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={`${styles.slider} `}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-4 d-flex justify-content-center flex-column ">
                <h1 className={`${styles.title} mx-2`}>Ipsum Dolor Si</h1>
                <p className={`${styles.p} mx-2 my-4  `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                  lacus ut magna velit eleifend. Amet, quis urna, a eu.
                </p>
                <button className={`${styles.button}  my-3  text-uppercase`}>
                  Read more <i className="fa-solid fa-arrow-right mx-2"></i>
                </button>
              </div>
              <div className="col-md-6 py-2">
                <img src={HomeSectionImg} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`${styles.slider} `}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-4 d-flex justify-content-center flex-column ">
                <h1 className={`${styles.title} mx-2`}>Ipsum Dolor Si</h1>
                <p className={`${styles.p} mx-2 my-4  `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                  lacus ut magna velit eleifend. Amet, quis urna, a eu.
                </p>
                <button className={`${styles.button}  my-3  text-uppercase`}>
                  Read more <i className="fa-solid fa-arrow-right mx-2"></i>
                </button>
              </div>
              <div className="col-md-6 py-2">
                <img src={HomeSectionImg} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.slider} `}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-4 d-flex justify-content-center flex-column ">
                <h1 className={`${styles.title} mx-2`}>Ipsum Dolor Si</h1>
                <p className={`${styles.p} mx-2 my-4  `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                  lacus ut magna velit eleifend. Amet, quis urna, a eu.
                </p>
                <button className={`${styles.button}  my-3  text-uppercase`}>
                  Read more <i className="fa-solid fa-arrow-right mx-2"></i>
                </button>
              </div>
              <div className="col-md-6 py-2">
                <img src={HomeSectionImg} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={`${styles.slider} `}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-4 d-flex justify-content-center flex-column ">
                <h1 className={`${styles.title} mx-2`}>Ipsum Dolor Si</h1>
                <p className={`${styles.p} mx-2 my-4  `}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo,
                  lacus ut magna velit eleifend. Amet, quis urna, a eu.
                </p>
                <button className={`${styles.button}  my-3  text-uppercase`}>
                  Read more <i className="fa-solid fa-arrow-right mx-2"></i>
                </button>
              </div>
              <div className="col-md-6 py-2">
                <img src={HomeSectionImg} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
