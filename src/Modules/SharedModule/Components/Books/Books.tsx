import React, { useEffect, useState } from "react";
import styles from "./Books.module.css";
import axios from "axios";
import bookImg1 from "../.././../../assets/books/cover1.jpg";
import bookImg2 from "../.././../../assets/books/cover2.jpg";
import bookImg3 from "../.././../../assets/books/cover3.jpg";

import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useNavigate } from "react-router-dom";
import BookItem from "../BookItem/BookItem";

export default function Books() {
  const navigate = useNavigate();
  const randomImage = () => {
    const images = [bookImg1, bookImg3, bookImg2];
    return images[Math.floor(Math.random() * images.length)];
  };
  const [booksList, setBooksList] = useState([]);
  const getAllBooks = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/book",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      setBooksList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBooks();
    return () => {};
  }, []);
  return (
    <div className={`${styles.booksSection} vh-100  `}>
      <div className="title py-5 text-center ">
        <p className="text-muted text-uppercase">Some quality items</p>
        <h2 className="">New Release Books</h2>
        <Link className={` ${styles.link}     `} to={"/dashboard/books-list"}>
          View all products <i className="fa-solid fa-arrow-right mx-2"></i>
        </Link>
        <div className=" clearfix"></div>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=" "
        id="bookSwiper"
      >
        {booksList.map((book, index) => (
          <SwiperSlide className="book " key={index}>
            <BookItem book={book} randomImage={randomImage} />
            <hr className="mb-5 " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
