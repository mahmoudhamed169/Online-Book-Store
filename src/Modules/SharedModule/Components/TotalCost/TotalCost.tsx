import { useSelector } from "react-redux";
import styles from "./TotalCost.module.css";
import { RootState } from "../../../../redux/store";

export default function TotalCost() {
  const totalCost = useSelector((state: RootState) => state.cart.totalCost);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  return (
    <>
      {totalQuantity > 0 && (
        <div className={`p-5 rounded ${styles.total}`}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="fw-bold mb-0">Cart Total Cost</h5>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Total</h6>
            <p className="mb-0">{totalCost.toFixed(2)} AED</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Tax</h6>
            <p className="mb-0">36 AED</p>
          </div>
          <hr className="mt-3" />
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mb-0">Total Cost</h6>
            <p className="mb-0">{(totalCost + 36).toFixed(2)} AED</p>
          </div>
        </div>
      )}

      {totalQuantity > 0 && (
        <div className="text-center mt-3">
          <button type="submit" className="w-50 submit">
            Proceed
          </button>
        </div>
      )}
    </>
  );
}
