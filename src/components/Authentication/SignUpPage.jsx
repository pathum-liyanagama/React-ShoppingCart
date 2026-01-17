import { useState } from "react";
import "./SignUpPage.css";
import userImage from "../../assets/user.webp";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(100, { message: "Name must be at most 100 characters long" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    address: z
      .string()
      .min(10, { message: "Address must be at least 10 characters long" })
      .max(300, { message: "Address must be at most 300 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // attaches error to confirmPassword
  });

const SignUpPage = () => {
  const [profilePic, setprofilePic] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="align_center form_page">
      <form
        className="authentication_form signup_form"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h2>Sign Up</h2>
        <div className="image_input_section">
          <div className="image_preview">
            <img src={profilePic ? URL.createObjectURL(profilePic) : userImage} alt="Sign Up" id="file-ip-1-preview" />
          </div>

          <label htmlFor="file-ip-1" className="image_label">
            Upload Image
          </label>
          <input
            type="file"
            id="file-ip-1"
            className="image_input"
            onChange={(e) => setprofilePic(e.target.files[0])}
          />
        </div>
        <div className="form_inputs signup_form_input">
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="form_text_input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <em className="form_error">{errors.name.message}</em>
            )}
          </div>
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
            {errors.email && (
              <em className="form_error">{errors.email.message}</em>
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
            {errors.password && (
              <em className="form_error">{errors.password.message}</em>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="form_text_input"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Enter your password again"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <em className="form_error">{errors.confirmPassword.message}</em>
            )}
          </div>
          <div className="signup_textares_section">
            <label htmlFor="address">Delivery Address</label>
            <textarea
              className="input_textarea"
              name="address"
              id="address"
              placeholder="Enter your delivery address"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <em className="form_error">{errors.address.message}</em>
            )}
          </div>
        </div>
        <button className="search_button form_submit">Submit</button>
      </form>
    </section>
  );
};

export default SignUpPage;
