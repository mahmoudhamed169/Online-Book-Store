import React from "react";
import styles from "./SubscribeSection.module.css";

export default function SubscribeSection() {
  return (
    <div className={`${styles.SubscribeSection}`}>
      <div className={`${styles.subscribeContainer} `}>
        <h2 className={`${styles.h2} `}>Subscibe to Our Newsletter</h2>
        <p className={`${styles.p}`}>
          Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,
          <br />
          consectetur. Elit adipiscing enim pharetra hac.
        </p>

        <div className={`${styles.mailContainer} `}>
          <div className="mail">
            <p className="text-muted mx-3">
              <i className={`fa-solid fa-envelope mx-3 ${styles.i}`}></i>
              youremail123@gmail.com
            </p>
          </div>
          <div>
            <button className={`${styles.subscribe} mx-4`}>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
