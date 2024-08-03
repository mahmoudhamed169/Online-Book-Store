import React from "react";
import styles from "./FeatureBook.module.css";
import book1 from "../../../../assets/books/book1.png";
import book2 from "../../../../assets/books/book2.png";
import book3 from "../../../../assets/books/book3.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css/bundle";

export default function FeatureBook() {
  return (
    <div className={`${styles.swiperContainer}  my-5 py-5`}>
      <div className="container-fluid ">
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
          className={`${styles.feature}`}
          id="feature"
        >
          <SwiperSlide>
            <div className="row">
              <div className="col-md-6 ">
                <div className="w-50 m-auto">
                  <img src={book1} className={`${styles.imgSlidBook}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 mt-5 pt-5">
                <h2>Featured book</h2>
                <p className={`${styles.p} position-relative text-muted mt-5 `}>
                  By Timbur Hood
                </p>
                <h3 className="mt-4">Birds Gonna Be Happy</h3>
                <p className="py-3 text-muted fa-1x">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{" "}
                  <br /> eu feugiat amet, libero ipsum enim pharetra hac.
                </p>
                <h6 className=" fw-bold mb-5">$ 45.00</h6>
                <button className={`${styles.button}  my-3  text-uppercase`}>
                  View more <i className="fa-solid fa-arrow-right mx-2"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row">
              <div className="col-md-6 ">
                <div className="w-50 m-auto">
                  <img src={book2} className={`${styles.imgSlidBook}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 mt-5 pt-5">
                <h2>Featured book</h2>
                <p className={`${styles.p} position-relative text-muted mt-5 `}>
                  Klien Marry
                </p>
                <h3 className="mt-4">Once upon a time</h3>
                <p className="py-3 text-muted fa-1x">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{" "}
                  <br /> eu feugiat amet, libero ipsum enim pharetra hac.
                </p>
                <h6 className=" fw-bold mb-5">$ 35.00</h6>
                <button className={`${styles.button}  my-3  text-uppercase`}>
                  View more <i className="fa-solid fa-arrow-right mx-2"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row">
              <div className="col-md-6 ">
                <div className="w-50 m-auto">
                  <img src={book3} className={`${styles.imgSlidBook}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 mt-5 pt-5">
                <h2>Featured book</h2>
                <p className={`${styles.p} position-relative text-muted mt-5 `}>
                  Arthur Doyle
                </p>
                <h3 className="mt-4">The lady beauty Scarlett</h3>
                <p className="py-3 text-muted fa-1x">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{" "}
                  <br /> eu feugiat amet, libero ipsum enim pharetra hac.
                </p>
                <h6 className=" fw-bold mb-5">$ 45.00</h6>
                <button className={`${styles.button}  my-3  text-uppercase`}>
                  View more <i className="fa-solid fa-arrow-right mx-2"></i>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

{
}
