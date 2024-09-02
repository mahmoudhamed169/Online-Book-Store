import styles from "./CartDetails.module.css";
import bookimg from "../../../../assets/book3.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  CartItem,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../../../redux/cartSlice";

export default function CartDetails() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className={`${styles.details} p-5`}>
        <button
          className={`${styles.clearButton} btn  `}
          onClick={handleClearCart}
        >
          <i className="fas fa-times "></i>
        </button>

        <div className="d-flex justify-content-between align-items-center my-5">
          <h5 className="fw-bold mb-0">Shopping Cart</h5>
          <p className="mb-0 text-muted">
            {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
          </p>
        </div>

        <hr className="my-4" />

        {cartItems.length === 0 ? (
          <div className="text-center">
            <h5 className="text-muted">Your cart is empty</h5>
          </div>
        ) : (
          cartItems.map((item: CartItem, index: number) => (
            <div key={item.id} className="card-body">
              <div className="row mb-4 d-flex justify-content-between align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <img
                    src={bookimg}
                    className="img-fluid rounded-3 my-2"
                    alt={item.name}
                  />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 my-2">
                  <h6 className="text-muted">{item.name}</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex my-2">
                  <button
                    className="btn btn-link px-2"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    id={`quantity-${index}`}
                    min="0"
                    name="quantity"
                    value={item.quantity}
                    type="number"
                    className="form-control form-control-sm text-center"
                    style={{
                      width: "60px",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "0.25rem",
                      border: "1px solid #ced4da",
                      backgroundColor: "#fff",
                    }}
                    readOnly
                  />

                  <button
                    className="btn btn-link px-2"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 my-2">
                  <h6 className="mb-0">€ {item.price.toFixed(2)}</h6>
                </div>

                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                  <button
                    className="text-muted btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <i className="fas fa-trash text-danger"></i>
                  </button>
                </div>
              </div>
              <hr className="my-4" />
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h5 className="fw-bold">Total</h5>
            <h5 className="fw-bold">€ {totalCost + (36).toFixed(2)}</h5>
          </div>
        )}
      </div>
    </div>
  );
}
