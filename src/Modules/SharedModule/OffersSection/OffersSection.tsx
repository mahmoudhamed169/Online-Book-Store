import React from "react";
import styles from "./OffersSection.module.css";
import offerImg from "../../../assets/Unsplash.png";

export default function OffersSection() {
  return (
    <div className=" mb-5">
      <div className={`${styles.offersContainer} rounded`}>
        <div className="container">
          <div className="row ">
            <div className="col-md-7 pt-5">
              <h2 className=" fw-bolder p-3 display-5 ">
                All books are 50% off now! <br /> Don't miss such a deal!
              </h2>
              <p className={`${styles.p} p-3`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed{" "}
                <br /> eu feugiat amet, libero ipsum enim pharetra hac.
              </p>

              <div className="timetable p-3 d-flex w-50 justify-content-around fw-bold">
                <div className="days text-center">
                  <h6 className="fw-bold  fs-4">768</h6>
                  <p>DAYS</p>
                </div>
                <div className="hours text-center">
                  <h6 className="fw-bold  fs-4">01</h6>
                  <p>HOUR</p>
                </div>
                <div className="mint text-center">
                  <h6 className="fw-bold  fs-4">27</h6>
                  <p>MINT</p>
                </div>
                <div className="sec text-center">
                  <h6 className="fw-bold  fs-4">55</h6>
                  <p>DAYS</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 pt-5">
              <img src={offerImg} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
