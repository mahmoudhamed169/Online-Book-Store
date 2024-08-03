import React, { useState } from "react";
import logoImg from "../../../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function ForgetPass() {
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/forgot-password",
        data
      );
      navigate("/reset-pass");
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
        <h2>Forget Password !! </h2>
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

        <div className="btns align-items-center my-4 d-flex flex-column">
          <button type="submit" className="w-50 my-3 send fw-semibold">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
