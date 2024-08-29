import styles from "./TotalCost.module.css";

export default function TotalCost() {
  return (
    <>
      <div className={`p-5 rounded ${styles.total} `}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-bold mb-0">Cart Total Cost</h5>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center ">
          <h6 className="mb-0">Total</h6>
          <p className="mb-0 "> 36 AED</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Tax</h6>
          <p className="mb-0 "> 36 AED</p>
        </div>
        <hr className="mt-3" />
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Total Cost </h6>
          <p className="mb-0 "> 36 AED</p>
        </div>
      </div>

      <div className=" text-center mt-3">
        <button type="submit" className="w-50  submit">
          Proced
        </button>
      </div>
    </>
  );
}
