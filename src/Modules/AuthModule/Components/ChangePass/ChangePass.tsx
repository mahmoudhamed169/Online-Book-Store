import authImg from "../../../../assets/Picture.png";
import React, { useState } from "react";
import logoImg from "../../../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function ChangePass({ onHide }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/change-password",
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      onHide();

      toast.success(response.data.message);
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="row ">
        <div className="col-md-5 h-100  ">
          <img src={authImg} className="h-100 w-100" alt="" />
        </div>
        <div className="col-md-7 h-100 p-5  m-auto ">
          <div className="logo mx-3 my-1 mb-3 text-center">
            <img src={logoImg} alt="" />
          </div>
          <div className="mx-5 mt-4 titles">
            <span className="text-muted">Welcome Back !</span>
            <h2>Change Your Password Easily </h2>
          </div>
          <form className="m-5 " onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fw-semibold"
              >
                Old Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="•••••••••"
                  className={`form-control ${
                    errors.password ? `is-invalid` : ``
                  }`}
                  id="exampleInputPassword1"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="btn btn-primary rounded-0"
                >
                  {showPassword ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
            </div>
            {errors.password && (
              <span className="text-danger">{errors?.password?.message}</span>
            )}

            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label fw-semibold"
              >
                New Password
              </label>
              <div className="input-group">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="•••••••••"
                  className={`form-control ${
                    errors.password ? `is-invalid` : ``
                  }`}
                  id="exampleInputPassword2"
                  {...register("password_new", {
                    required: "New password is required",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{3,}$/,
                      message:
                        "New Password must include 1 uppercase, 1 lowercase, 1 number, and 1 special character.",
                    },
                  })}
                />
                <span
                  onClick={toggleNewPasswordVisibility}
                  className="btn btn-primary rounded-0"
                >
                  {showNewPassword ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </span>
              </div>
            </div>
            {errors.password_new && (
              <span className="text-danger">
                {errors?.password_new?.message}
              </span>
            )}

            <div className="btns align-items-center my-4 d-flex flex-column">
              <button type="submit" className="w-50 my-3 submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
