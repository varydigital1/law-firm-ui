import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { CopyOutlined } from '@ant-design/icons';
import "../header/style.css";
import 'antd/dist/reset.css'; // សម្រាប់ version 5
import {
  Input,
} from 'antd';

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Contact us", path: "/contact" },
    { name: "Document", path: "/documents" },
  ];

  return (
    <header>
      <nav className=" shadow-sm font-[Poppins] text-lg  text-[#555555]">
        <div className="container mx-auto flex justify-between items-center px-4 h-[80px] md:px-0">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-blue-900 md:text-base  lg:text-xl lg:pl-4 2xl:text-2xl cursor-pointer">
            LOGO COMPANY
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-lg pt-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setActive(item.path)}
                  className={`cursor-pointer pb-1 ${
                    active === item.path
                      ? "border-b-2 border-blue-900 text-[#001A3B] font-bold"
                      : "text-gray-700 hover:text-[#8B0000] hover:font-bold"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center space-x-4">
              {showSearch && (
                <Input allowClear className="text-gray-700 cursor-pointer hover:text-blue-900 border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3 font-normal custom-width"  placeholder="Search..." />
              )}
              <div
                onClick={() => setShowSearch(!showSearch)}
                className="cursor-pointer flex items-center pr-4 md:pr-0"
              >
                <FaSearch className="text-gray-700 hover:text-blue-900" />
              </div>
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-blue-900">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                alt="UK flag"
                className="w-5 h-5"
              />
              <span className="text-sm lg:text-base">English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with slow transition */}
        <div
          className={`md:hidden transition-all duration-700 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
          style={{ zIndex: 50, position: 'relative' }}
        >
          <ul className="flex flex-col space-y-2 px-4 py-4 text-base sm:text-lg">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setActive(item.path);
                    setIsMenuOpen(false); // Close menu after click
                  }}
                  className={`block py-2 z-40 ${
                    active === item.path
                      ? "text-blue-900 font-bold"
                      : "text-gray-700 hover:text-[#8B0000]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="flex items-center space-x-2 pt-4 border-t border-gray-300">
              {showSearch && (
                <Input allowClear className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-normal custom-width"  placeholder="Search..." />
              )}
              <div
                onClick={() => setShowSearch(!showSearch)}
                className="cursor-pointer flex items-center pr-3"
              >
                <FaSearch className="text-gray-700 hover:text-blue-900" />
              </div>

              {/* Language Selector */}
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="UK flag"
                  className="w-5 h-5"
                />
                <span>English</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;