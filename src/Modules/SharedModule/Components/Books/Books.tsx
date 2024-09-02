import React, { useEffect, useState } from "react";
import styles from "./Books.module.css";
import axios from "axios";

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
    <div className={`${styles.booksSection} pb-5 `}>
      <div className="title py-5 text-center ">
        <p className="text-muted text-uppercase">Some quality items</p>
        <h2 className="">New Release Books</h2>
        <Link className={` ${styles.link}     `} to={"/dashboard/books-list"}>
          View all products <i className="fa-solid fa-arrow-right mx-2"></i>
        </Link>
        <div className=" clearfix"></div>
      </div>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        className=" pb-4"
        id="bookSwiper"
      >
        {booksList.map((book, index) => (
          <SwiperSlide className="book" key={index}>
            <BookItem book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
