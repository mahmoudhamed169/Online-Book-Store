import React from "react";
import styles from "./Footer.module.css";
import logoImg from "../../../../assets/sample logo 1.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={`${styles.footer} text-white`}>
      <div className="container">
        <div className="row">
          <div className="col-md-5  mt-5 ">
            <div className="img-container my-5">
              <img src={logoImg} alt="" />
            </div>
            <div className="caption my-5 ">
              <p className={`${styles.p}`}>
                Nostrud exercitation ullamco laboris nisi <br /> ut aliquip ex
                ea commodo consequat.
              </p>
            </div>
            <div className="icones w-50 d-flex justify-content-between my-4">
              <i className="fa-brands fa-square-facebook fs-2"></i>
              <i className="fa-brands fa-linkedin  fs-2"></i>
              <i className="fa-brands fa-twitter fs-2"></i>
              <i className="fa-brands fa-youtube fs-2"></i>
            </div>
          </div>
          <div className="col-md-4  mt-5">
            <h5 className="text-white mt-5">Company</h5>
            <div className="campanyLinks py-4 d-flex flex-column">
              <Link to="" className={`${styles.link}`}>
                HOME
              </Link>
              <Link to="" className={`${styles.link}`}>
                ABOUT US
              </Link>
              <Link to="" className={`${styles.link}`}>
                BOOKS{" "}
              </Link>
              <Link to="" className={`${styles.link}`}>
                NEW RELEASE
              </Link>
              <Link to="" className={`${styles.link}`}>
                CONTACT US
              </Link>
              <Link to="" className={`${styles.link}`}>
                BLOG
              </Link>
            </div>
          </div>
          <div className="col-md-3  mt-5">
            <h5 className="text-white mt-5">Importent Links</h5>
            <div className="importantLinks py-4 d-flex flex-column">
              <Link to="" className={`${styles.link}`}>
                Privacy Policy
              </Link>
              <Link to="" className={`${styles.link}`}>
                FAQs
              </Link>
              <Link to="" className={`${styles.link}`}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="extra-info d-flex justify-content-between py-5">
          <p>© 2022 Arihant. All Rights Reserved. </p>
          <p>Privacy | Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
