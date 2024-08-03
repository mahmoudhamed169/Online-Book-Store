import React, { useState } from "react";
import logoImg from "../../../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function ResetPass() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/reset-password",
        data
      );
      navigate("/login");
      toast.success(response.data.message);
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="logo mx-3 my-1 mb-3 text-center">
        <img src={logoImg} alt="" />
      </div>
      <div className="mx-5 mt-4 titles">
        <span className="text-muted">Welcome Back !</span>
        <h2>Reset Your Password Now ! </h2>
      </div>

      <form className="mx-5 mt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fw-semibold"
          >
            E-mail
          </label>
          <input
            type="email"
            placeholder="john@mail.com"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "email is not valid",
              },
            })}
          />
        </div>
        {errors.email && (
          <span className="text-danger">{errors?.email?.message}</span>
        )}

        {/* opt */}
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fw-semibold"
          >
            OTP
          </label>
          <input
            type="number"
            placeholder="1233"
            className="form-control"
            id="exampleInputOtp1"
            {...register("otp", {
              required: "OTP is required",
            })}
          />
        </div>
        {errors.otp && (
          <span className="text-danger">{errors?.otp?.message}</span>
        )}

        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-semibold"
          >
            Password
          </label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="•••••••••"
              className={`form-control ${errors.password ? `is-invalid` : ``}`}
              id="exampleInputPassword1"
              {...register("password", {
                required: "password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{3,}$/,
                  message:
                    "Password must include 1 uppercase, 1 lowercase, 1 number, and 1 special character.",
                },
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

        <div className="btns align-items-center my-4 d-flex flex-column">
          <button type="submit" className="w-50 my-3 submit">
            Send
          </button>

          <Link className=" text-center w-50 link" to={"/register"}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
