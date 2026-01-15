import React from "react";
import "./LoginPage.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="align_center form_page">
      <form
        action=""
        className="authentication_form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Login</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="form_text_input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <em className="form_error">Please enter your email</em>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="form_text_input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <em className="form_error">Please enter your password</em>
            )}
          </div>
          <button className="search_button form_submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
