import React, { useState } from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";


import Steps from "./Steps";

const Form = ({ history }) => {
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
         
          if (result) {
            history.push("/form2");
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
      <Steps step1 />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-7 flex flex-col space-y-4"
      >
        <input
          type="text"
          name="name"
          required
          className="py-4 rounded px-2 font text-base text-black required outline-none"
          placeholder="Full Name"
        />
        <input
          type="email"
          required
          name="email"
          className="py-4 rounded px-2 font text-base text-black required outline-none"
          placeholder="Email Address"
        />
        <input
          type="number"
          name="phonenumber"
          required
          className="py-4 rounded px-2 font text-base text-black aria-required: outline-none"
          placeholder="Phone Number"
        />
        <button
          type="submit"
          className="ye md:py-4 py-3 md:text-2xl font text-xl hover:bg-orange-500 text-black font"
        >
          Get Your Free Proposal
        </button>
      </form>
    </div>
  );
};

export default Form;
