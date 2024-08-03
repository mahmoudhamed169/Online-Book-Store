import React, { useState } from "react";
import logoImg from "../../../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  let navigate = useNavigate();
  const goToLogin = () => {
    navigate("login");
  };

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit = async (data) => {
    try {
      let response = await axios.post(
        "https://upskilling-egypt.com:3007/api/auth/register",
        data
      );
      console.log(response.data);
      navigate("login");
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
      <div className=" titles mx-3">
        <span className="text-muted ">Create new acccount</span>
        <h2>Register</h2>
      </div>
      <form className="m-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3 mb-2">
          <div className="col">
            <div>
              <label
                htmlFor="exampleInputfirstName"
                className="form-label fw-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className={`form-control ${
                  errors.first_name ? `is-invalid` : ``
                }`}
                id="exampleInputfirstName"
                {...register("first_name", {
                  required: "first name is requird",
                })}
              />
            </div>
            {errors.first_name && (
              <span className="text-danger">{errors?.first_name?.message}</span>
            )}
          </div>
          <div className="col">
            <div>
              <label
                htmlFor="exampleInputfirstName"
                className="form-label fw-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className={`form-control ${
                  errors.last_name ? `is-invalid` : ``
                }`}
                id="exampleInputLastName"
                aria-describedby="emailHelp"
                {...register("last_name", {
                  required: "Last name is requird",
                })}
              />
            </div>
            {errors.last_name && (
              <span className="text-danger">{errors?.last_name?.message}</span>
            )}
          </div>
        </div>

        <div className="mb-2">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label fw-semibold"
          >
            E-mail
          </label>
          <input
            type="email"
            placeholder="john@mail.com"
            className={`form-control ${errors.email ? `is-invalid` : ``}`}
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

        <div className="mb-2">
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
                <i class="fa-solid fa-eye-slash"></i>
              )}
            </span>
          </div>
        </div>
        {errors.password && (
          <span className="text-danger">{errors?.password?.message}</span>
        )}

        <div className="">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label fw-semibold"
          >
            Role
          </label>
          <select
            className="form-select "
            {...register("role", {
              required: "role is required",
            })}
          >
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </select>
        </div>
        {errors.role && (
          <span className="text-danger">{errors?.role?.message}</span>
        )}

        <div className="btns align-items-center my-3 d-flex flex-column">
          <button type="submit" className="w-50 my-3 submit">
            Register
          </button>

          <Link className=" text-center w-50 link" to={"/login"}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
