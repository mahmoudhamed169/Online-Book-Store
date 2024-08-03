import React, { useState } from "react";
import logoImg from "../../../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login({ saveLoginData }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = async (data) => {
    try {
      let response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/login",
        data
      );
      // console.log(response.data.data.accessToken);
      localStorage.setItem("userToken", response.data.data.accessToken);
      navigate("/dashboard/home");
      saveLoginData();
      toast.success(response.data.message);
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="logo mx-3 my-1 text-center">
        <img src={logoImg} alt="" />
      </div>
      <div className="m-5 titles">
        <span className="text-muted">Welcome Back !</span>
        <h2>Login to your account </h2>
      </div>
      <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
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

        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-semibold"
          >
            Password
          </label>
          <div className=" input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="•••••••••"
              className="form-control"
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
                <i class="fa-solid fa-eye-slash"></i>
              )}
            </span>
          </div>
        </div>
        {errors.password && (
          <span className="text-danger">{errors?.password?.message}</span>
        )}
        <Link to={"/forget-pass"}> Forget Password ?</Link>
        <div className="btns align-items-center my-4 d-flex flex-column">
          <button type="submit" className="w-50 my-3 submit">
            login
          </button>

          <Link className=" text-center w-50 link" to={"/register"}>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
