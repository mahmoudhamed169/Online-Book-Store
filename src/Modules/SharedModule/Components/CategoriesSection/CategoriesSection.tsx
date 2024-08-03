import React, { useEffect, useState } from "react";
import styles from "./CategoriesSection.module.css";
import categoryImg1 from "../../../../assets/category/category.png";
import categoryImg2 from "../../../../assets/category/category1.png";
import categoryImg3 from "../../../../assets/category/category2.png";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Function to get a random image
const getRandomImage = () => {
  const images = [categoryImg1, categoryImg2, categoryImg3];
  return images[Math.floor(Math.random() * images.length)];
};

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/category",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log("API Response:", response.data);
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="container">
      <div className="title px-4">
        <p className={`${styles.p} mt-5 mx-5`}>Categories</p>
        <h2>Explore our Top Categories</h2>
      </div>

      <div className={`${styles.categories}`}>
        <Swiper
          className="pt-4"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          onSwiper={(swiper) => console.log("Swiper Instance:", swiper)}
          onSlideChange={() => console.log("Slide changed")}
        >
          {categories.map((category, index) => {
            const randomImage = getRandomImage();
            return (
              <SwiperSlide key={index}>
                <div className="category text-center mt-5">
                  <img
                    src={randomImage}
                    className="w-100"
                    alt={`${category.title} image`}
                    onError={(e) => {
                      e.target.src = categoryImg1; // Fallback image
                    }}
                  />
                  <h3 className="my-4">{`${
                    category.title.charAt(0).toUpperCase() +
                    category.title.slice(1)
                  } Books`}</h3>
                </div>
              </SwiperSlide>
            );
          })}

          <div className={`${styles.controls}`}>
            <div className={`swiper-button-prev-custom ${styles.btn} fw-bold`}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div
              className={`swiper-button-next-custom ${styles.btn} fw-bold mx-3`}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </Swiper>

        <div className="text-center">
          <button className={`${styles.button} my-3 text-uppercase`}>
            View more <i className="fa-solid fa-arrow-right mx-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
