import React from "react";

export default function TopHeader() {
  return (
    <div className=" text-white p-2 " style={{ backgroundColor: "#393280" }}>
      <div className="px-5 d-flex justify-content-between align-items-lg-center">
        <div>
          <i className="fa-solid fa-phone px-1"></i> <span>+91 8374902234</span>
        </div>
        <div className="icones text-white">
          <i className="fa-brands fa-facebook-f px-3"></i>
          <i className="fa-brands  fa-instagram px-3"></i>
          <i className="fa-brands fa-linkedin px-3"></i>
          <i className="fa-brands fa-twitter px-3"></i>
        </div>
      </div>
    </div>
  );
}
