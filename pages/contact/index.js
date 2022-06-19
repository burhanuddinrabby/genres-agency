import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import contactImg from "../../public/image/contact.png";
import SectionTitle from "../Main/SectionTitle";
import { toast, ToastContainer } from 'react-nextjs-toast';

const contact = () => {
  const submitMessage = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const data = {name, email, message};
    console.log(data);
    fetch("http://localhost:5000/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log("Message sent");
          toast.notify(`Hello ${name}, We received your message, we will reach you asap`, {
            duration: 5,
            type: "success",
            title: "Message sent Success"
          })
        }
      })
    // e.target.reset();
  }
  return (
    <div>
      <Head>
        <title>Contact | Genres</title>
      </Head>
      <Navbar></Navbar>
      <div className="lg:my-28 my-20 ">
        <SectionTitle>Contact US</SectionTitle>
        <div className="lg:flex  my-8 lg:my-14">
          <div className=" lg:px-48 px-4 lg:mt-[140px] mt-[30px] lg:mb-0 mb-16 ">
            <h3 className="text-primary text-lg lg:text-2xl font-bold font-poppins">
              Have a project?
            </h3>
            <br />
            <h1 className="mb-20 font-poppins font-semibold text-2xl lg:text-4xl ">
              We would love to help. <br /> Send us a message
            </h1>
            <form data-aos="fade-up" onSubmit={submitMessage}>
              <div className="flex flex-wrap flex-col  lg:justify-between text-[#7F7F7F] font-poppins grid-cols-1">
                <div className="relative input-container  mb-12">
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary"
                    required
                  />
                  <label htmlFor="name" className="lg:left-2 left-1">
                    Enter Your Name
                  </label>
                </div>
                <div className="relative input-container  mb-12">
                  <input
                    type="name"
                    id="email"
                    className="w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary"
                    required
                  />
                  <label className="lg:left-2 left-1" htmlFor="email">
                    Your E-mail
                  </label>
                </div>

                <div className="hidden lg:block"></div>
                <div className="relative input-container lg:w-full mb-12">
                  <input
                    type="text"
                    id="message"
                    className="w-full border-b-2 bg-[#F3F5F7] focus:outline-none focus:border-b-primary"
                    required
                  />
                  <label className="lg:left-2 left-1" htmlFor="message">
                    Your Message
                  </label>
                </div>
              </div>
              <div className="">
                <button type="submit" className="btn rounded-none  bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-[#fff] border-none w-[196px] mx-auto block lg:mt-18 mt-6">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="lg:pl-48">
            <Image src={contactImg} alt="Contact Us" />
          </div>
        </div>
      </div>
      <Footer></Footer>
        <ToastContainer align={"center"}/>
    </div>
  );
};

export default contact;
