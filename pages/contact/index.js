import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import contactImg from "../../public/image/contact.png";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact | Genres</title>
      </Head>
      <Navbar></Navbar>
      <Image src={contactImg} alt="Contact Us" />
      <Footer></Footer>
    </div>
  );
};

export default contact;
