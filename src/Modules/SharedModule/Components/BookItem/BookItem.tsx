import styles from "./bookItem.module.css";
import bookImg from "../../../../assets/book3.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice";
import { IBook } from "../../../../interfaces/interfaces";

interface BookItemProps {
  book: IBook;
}

export default function BookItem({ book }: BookItemProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: book._id,
        name: book.name,
        price: book.price,
        quantity: 1,
      })
    );
  };

  return (
    <div className={`w-100 mb-3 ${styles.bookContainer}`}>
      <div
        className={`${styles.imgContainer} w-75 m-auto shadow position-relative bg-white`}
      >
        <img src={bookImg} alt={book.name} className="w-100" />
        <div
          className={`${styles.overlay} d-flex flex-column justify-content-center align-items-center`}
        >
          <button className={styles.viewButton}>View Product</button>
          <button className={styles.addButton} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className={`${styles.bookInfo} mt-3 text-center`}>
        <h5 className="mb-1">{book.name}</h5>
        <p className="mb-1">{book.author}</p>
        <h6 className="fw-bold">$ {book.price}</h6>
      </div>
    </div>
  );
}
