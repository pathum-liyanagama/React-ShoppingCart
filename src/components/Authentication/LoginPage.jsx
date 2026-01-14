import React from "react";
import "./LoginPage.css";
import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <section className="align_center form_page">
      <form action="" className="authentication_form" onSubmit={handleSubmit}>
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
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <button className="search_button form_submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
