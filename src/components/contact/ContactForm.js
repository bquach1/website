import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceId = "service_fswj57o";
    const templateId = "template_we3pbu3";
    const userId = "SHDLQUE3lEq6avrDr";

    emailjs
      .send(serviceId, templateId, data, userId)
      .then((response) => {
        alert("Message sent successfully!");
        reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "1rem" }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          Name:
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </label>
        <label>
          Email:
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Your Email"
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </label>
        <label>
          Message:
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            rows="5"
          ></textarea>
          {errors.message && (
            <span style={{ color: "red" }}>{errors.message.message}</span>
          )}
        </label>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            background: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
