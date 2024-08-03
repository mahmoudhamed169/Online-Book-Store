import React from "react";
import styles from "./Articles.module.css";
import articalImg1 from "../../../../assets/articles/ar1.png";
import articalImg2 from "../../../../assets/articles/ar2.png";
import articalImg3 from "../../../../assets/articles/ar3.png";
export default function Articles() {
  return (
    <div className="my-5">
      <div className="Articles p-5">
        <div className="title my-5 text-center">
          <p className="text-muted text-uppercase">Read our articles</p>
          <h2 className=" fw-medium display-5 mb-3">Latest Articles</h2>
        </div>

        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="img-container my-2 ">
                <img src={articalImg1} className="w-100" alt="" />
              </div>
              <div className="artical-info"></div>
              <p className="my-2">2 aug, 2021</p>
              <p className={`my-2 ${styles.p}`}>
                Reading books always makes the moments happy
              </p>
              <hr />
              <div className={`${styles.social} `}>
                <i className="fa-brands fa-facebook-f mx-2"></i>
                <i className="fa-brands fa-twitter mx-2"></i>
                <i className="fa-brands  fa-instagram ms-2"></i>
              </div>
              <div className={`${styles.clr}`}></div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="img-container my-2 ">
                <img src={articalImg2} className="w-100" alt="" />
              </div>
              <div className="artical-info"></div>
              <p className="my-2">2 aug, 2021</p>
              <p className={`my-2 ${styles.p}`}>
                Reading books always makes the moments happy
              </p>
              <hr />
              <div className={`${styles.social} `}>
                <i className="fa-brands fa-facebook-f mx-2"></i>
                <i className="fa-brands fa-twitter mx-2"></i>
                <i className="fa-brands  fa-instagram ms-2"></i>
              </div>
              <div className={`${styles.clr}`}></div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="img-container my-2 ">
                <img src={articalImg3} className="w-100" alt="" />
              </div>
              <div className="artical-info"></div>
              <p className="my-2">2 aug, 2021</p>
              <p className={`my-2 ${styles.p}`}>
                Reading books always makes the moments happy
              </p>
              <hr />
              <div className={`${styles.social} `}>
                <i className="fa-brands fa-facebook-f mx-2"></i>
                <i className="fa-brands fa-twitter mx-2"></i>
                <i className="fa-brands  fa-instagram ms-2"></i>
              </div>
              <div className={`${styles.clr}`}></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className={`${styles.btn} text-uppercase`}>
            read all articles <i className=" fa-solid fa-arrow-right mx-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
