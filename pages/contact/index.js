import Head from "next/head";
import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact | Genres</title>
      </Head>
      <Navbar></Navbar>
      <div className="mb-3 lg:px-48 px-4 py-14">this is contact</div>
      <Footer></Footer>
    </div>
  );
};

export default contact;
