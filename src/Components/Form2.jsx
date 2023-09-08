import React, { useState } from "react";
import { Link } from "react-router-dom";
import Steps from "./Steps";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Form2 = ({ history }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4pfubka",
        "template_wenmek1",
        form.current,
        "SJ-eJW6MHlGo6ATRK"
      )
      .then(
        (result) => {
          console.log("Email sent successfully!");
          toast.success("Email sent successfully!");
          if (result) {
            history.push("/form3");
          }
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send email. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <h1 className="md:text-4xl text-2xl text-center font">Grow Your Brand</h1>
      <p className="text-lg text-center font mt-1">
        by partnering with SmartSites
      </p>
      <Steps step1 step2 />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-7 flex flex-col space-y-4"
      >
        <input
          type="text"
          name="company"

          required
          className="py-4 rounded px-2 font-sans text-xl text-black required outline-none"
          placeholder="Company"
        />
        <input
          type="text"
          name="service"
          required
          className="py-4 rounded px-2 font-sans text-xl text-black required outline-none"
          placeholder="Service You Are Intrested In"
        />
        <input
          type="text"
          name="help"
          required
          className="py-4 rounded px-2 font-sans text-xl text-black required outline-none"
          placeholder="How Can We Help You"
        />
        <button className="ye md:py-4 py-3 md:text-2xl font text-xl hover:bg-orange-500 text-black font">
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Form2;
