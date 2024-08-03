import React from "react";
import { Link } from "react-router-dom";
import ChangePassModel from "../ChangePassModel/ChangePassModel";
import axios from "axios";
import { toast } from "react-toastify";

export default function MainNavBar() {
  const logOut = async () => {
    try {
      const response = await axios.get(
        "https://upskilling-egypt.com:3007/api/auth/logout",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      // console.log(response);
      localStorage.removeItem("userToken");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  px-5">
        <div className="container-fluid ">
          <Link className="navbar-brand  fa-2xl  p-4" to={"/dashboard/home"}>
            <i className="fa-solid fa-book"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase  fw-semibold ">
              <li className="nav-item  ">
                <a
                  className="nav-link active border-end px-4"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link border-end px-4" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link border-end px-4" href="#">
                  books
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link border-end px-4" href="#">
                  new release
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link border-end px-4" href="#">
                  contact us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-4" href="#">
                  blog
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle border-end px-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-regular fa-user"></i>
                </a>
                <ul className="dropdown-menu">
                  <li className="my-2">
                    <Link className="dropdown-item" to={"/"} onClick={logOut}>
                      <i className="fa-solid fa-right-from-bracket px-2"></i>
                      <span>Log Out</span>
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <ChangePassModel />
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item ">
                <a className="nav-link border-end px-3" href="#">
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link  px-3" href="#">
                  <i className="fa-regular fa-heart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
