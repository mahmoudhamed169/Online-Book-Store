import styles from "./CartDetails.module.css";
import bookimg from "../../../../assets/book3.png";
export default function CartDetails() {
  return (
    <div>
      <div className={`${styles.datails} p-5`}>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h5 className="fw-bold mb-0">Shopping Cart</h5>
          <p className="mb-0 text-muted">3 items</p>
        </div>

        <hr className="my-4"></hr>
        <div className="card-body ">
          <div className="row mb-4 d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img
                src={bookimg}
                className="img-fluid rounded-3 my-2"
                alt="Book"
              />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 my-2">
              <h6 className="text-muted ">book Name</h6>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex my-2">
              <button
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-link px-2"
              >
                <i className="fas fa-minus"></i>
              </button>
              <input
                id="form1"
                min="0"
                name="quantity"
                value="1"
                type="number"
                className="form-control form-control-sm"
              />
              <button
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-link px-2"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 my-2">
              <h6 className="mb-0">€ 44.00</h6>
            </div>

            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <button className="text-muted btn">
                <i className="fas fa-trash text-danger"></i>
              </button>
            </div>
          </div>
        </div>
        <hr className="my-4"></hr>
      </div>
    </div>
  );
}
