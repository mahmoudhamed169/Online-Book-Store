import React from "react";
import styles from "./bookItem.module.css";
export default function BookItem({ book, randomImage }) {
  return (
    <div className="bookContainer text-center ms-3">
      <img
        src={randomImage()}
        className={`${styles.imgBook} w-100 shadow `}
        alt=""
      />

      <div className="bookInfo mt-3">
        <h5>{book.name}</h5>
        <p className="text-muted">{book.auther}</p>
        <h6>$ {book.price}</h6>
      </div>
    </div>
  );
}
