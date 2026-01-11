import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <section className="align_center form_page">
      <form action="" className="authentication_form">
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
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className="form_text_input"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button className="search_button form_submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
