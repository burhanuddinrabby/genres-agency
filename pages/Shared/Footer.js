import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faFacebook,
  faLinkedin,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className=" lg:px-48 px-4 lg:mt-[120px] mt-[30px]"
      data-aos="fade-down"
    >
      {/* <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-4 font-poppins z-10 mx-auto lg:px-60">
                <div className="lg:p-7 p-5 rounded-md">
                    <div className="bg-white w-[57px] h-[57px] text-2xl rounded-lg text-primary grid justify-center items-center mx-auto lg:ml-2 mb-5">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className="text-2xl mb-4 text-black font-bold">Phone:</h1>
                        <p className="text-sm text-[#8E8E8E]">+880171122-334455</p>
                        <p className="text-sm text-[#8E8E8E] mt-2">+880171122-334455</p>
                    </div>
                </div>
                <div className="lg:p-7 p-5 rounded-md">
                    <div className="bg-white w-[57px] h-[57px] text-2xl rounded-lg text-primary grid justify-center items-center mx-auto lg:ml-2 mb-5">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className='text-center lg:text-left'>
                        <h1 className="text-2xl mb-4 text-black font-bold">Email:</h1>
                        <p className="text-sm text-[#8E8E8E]">example@gmail.com</p>
                        <p className="text-sm text-[#8E8E8E] mt-2">example@gmail.com</p>
                    </div>
                </div>
            </div> */}
      <div className="text-center mt-10">
        <p className="font-semibold text-primary">Follow Us</p>
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 w-[60%] mx-auto pt-12">
          <div className="flex items-center mx-auto lg:mx-0">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-primary text-2xl"
            />
            <a
              target="_blank"
              href="https://www.facebook.com/genres.agency"
              className="ml-2 underline text-[#8e8e8e]"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className="flex items-center mx-auto lg:mx-0">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="text-primary text-2xl"
            />
            <a
              target="_blank"
              href="https://instagram.com/genres.agency"
              className="ml-2 underline text-[#8e8e8e]"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="flex items-center mx-auto lg:mx-0">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-primary text-2xl"
            />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/genres-agnecy-4603a7242"
              className="ml-2 underline text-[#8e8e8e]"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
          <div className="flex items-center mx-auto lg:mx-0">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-primary text-2xl"
            />
            <a
              target="_blank"
              href="https://twitter.com/GenResAgency?t=m_nD23aAyjuZsX6woHtiOg&s=09"
              className="ml-2 underline text-[#8e8e8e]"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>
          <div className="flex items-center mx-auto lg:mx-0">
            <FontAwesomeIcon
              icon={faPinterest}
              className="text-primary text-2xl"
            />
            <a
              target="_blank"
              href="https://pin.it/3zramFY"
              className="ml-2 underline text-[#8e8e8e]"
              rel="noreferrer"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-[#8e8e8e] py-20">
        © GenRes Agency | All Rights Reserved 2022
      </p>
    </div>
  );
};

export default Footer;
