// src/components/Footer.jsx
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "../footer/style.css";

function Footer() {
  return (
    <footer className="bg-[#0b2146] text-gray-300 pt-10 h-full px-6">
      {/* Top Section */}
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-0 border-b border-gray-600 
        2xl:mt-10 xl:mt-8 lg:mt-3
        2xl:pb-10 xl:pb-10 lg:pb-8 md:pb-7 sm:pb-5 pb-4
        grid-cols-3
        md:bg-red-500
        xl:bg-green-500
        "
      >
        {/* Location */}
        <div className="flex items-center justify-center h-[102px] relative 
        2xl:w-full xl:full lg:w-full md:w-full sm:w-full w-full
        ">
          <div className="bg-[#1e3357] p-3 rounded-full text-yellow-400">
            <FaMapMarkerAlt  className="icon-logo"/>
          </div>
          <div className="ml-4 bg-blue">
            <h4 className="font-[Poppins] main-contact">Location</h4>
            <p className="font-[Poppins] text-sm submain-contact">
              #371 7th Abc, Defg Hijk, NY 10001
            </p>
          </div>
          <div className="absolute right-0 h-full border-l border-gray-600 line-width 
           2xl:block xl:block lg:block md:block sm:block
          "></div>
        </div>
        {/* Phone */}
        <div className="flex items-center justify-center h-[102px] relative 
        2xl:w-full xl:full lg:w-full md:w-full sm:w-full w-full
        ">
          <div className="bg-[#1e3357] p-3 rounded-full text-yellow-400">
            <FaPhoneAlt className="icon-logo"/>
          </div>
          <div className="ml-4">
            <h4 className="font-[Poppins] main-contact">Phone</h4>
            <p className="font-[Poppins] text-sm submain-contact leading-normal">
              +123 456 789 <br />
              +987 654 321
            </p>
          </div>
          <div className="absolute right-0 h-full border-l border-gray-600
           2xl:block xl:block lg:block md:block sm:block
          "></div>
        </div>
        {/* Email */}
        <div className="flex items-center justify-center h-[102px]
        2xl:w-full xl:full lg:w-full md:w-full sm:w-full w-full
        ">
          <div className="bg-[#1e3357] p-3 rounded-full text-yellow-400">
            <FaEnvelope className="icon-logo" />
          </div>
          <div className="ml-4">
            <h4 className="font-[Poppins] main-contact">Email</h4>
            <p className="font-[Poppins] submain-contact leading-normal">
              user@gmail.com <br />
              user12@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-8 grid-cols-2  relative">
        <div className="py-7">
          <h2 className="text-white 
          2xl:text-[24px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-16px
           font-bold">LOGO COMPANY</h2>
          <p className="mt-2 text-gray-400 
          2xl:text-[16px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px]
          max-w-xl leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            minima nam vero ratione exercitationem vitae,
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="bg-[#1e3357] p-2 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-[#1e3357] p-2 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-[#1e3357] p-2 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="absolute left-1/2 h-[70%] mt-6  border-l border-gray-600 
         2xl:block xl:block lg:block md:block sm:block
        "></div>
        {/* Right Side - Links */}
        <div className="flex flex-col items-center justify-center  space-y-4 h-[163px]">
          <h2 className="text-white 
          2xl:text-[20px] xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]
          font-bold
          ">Page</h2>
          <ul className="space-y-2 text-center 
          2xl:text-[16px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px]
          ">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
