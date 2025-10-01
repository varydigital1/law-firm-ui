// src/components/Footer.jsx
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <nav className="font-[Poppins] text-lg  text-[#555555] bg-[#001A3B]">
        <div
          className="container mx-auto bg-blue-500 h-[407px]
             2xl:bg-yellow-500
             xl:bg-red-500
             lg:bg-green-500
             md:bg-orange-500
             sm:bg-pink-500
            "
        >
          <div className="w-full  bg-green-500">
            <div className="w-auto mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-600 pb-8 bg-green-500">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#1e3357] p-3 rounded-full text-yellow-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p>#371 7th Abc, Defg Hijk, NY 10001</p>
                </div>
              </div>
              {/* <hr className="w-px h-full  mx-6  border-4 border-indigo-500" /> */}
              {/* <div className="h-12 border-l border-gray-600"></div> */}
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#1e3357] p-3 rounded-full text-yellow-400">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p>+123 456 789</p>
                  <p>+987 654 321</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#1e3357] p-3 rounded-full text-yellow-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p>user@gmail.com</p>
                  <p>user12@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-blue-500">
            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-pink-500">
              {/* Left Side - Company Info */}
              <div>
                <h2 className="text-white text-xl font-bold">LOGO COMPANY</h2>
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam minima nam vero ratione exercitationem vitae,
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

              {/* Right Side - Links */}
              <div className="md:pl-16">
                <h2 className="text-white text-xl font-bold">Page</h2>
                <ul className="mt-2 space-y-2">
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
          </div>
        </div>
      </nav>
    </footer>
  );
};
export default Footer;
