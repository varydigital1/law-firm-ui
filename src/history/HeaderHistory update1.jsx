import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
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
      <nav className=" shadow-sm font-[Poppins] text-lg font-bold">
        <div className="container mx-auto flex justify-between items-center px-4 h-[80px]">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-blue-900">
            LOGO COMPANY
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 text-sm lg:text-lg ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setActive(item.path)}
                  className={`cursor-pointer pb-1 ${
                    active === item.path
                      ? "border-b-2 border-blue-900 text-[#001A3B] font-bold"
                      : "text-gray-700 hover:text-[#8B0000]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right icons (desktop only) */}
          <div className="hidden md:flex items-center space-x-4">
            <FaSearch className="text-gray-700 cursor-pointer hover:text-blue-900" />
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-2 px-4 py-4  text-base sm:text-lg">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => {
                    setActive(item.path);
                    setIsMenuOpen(false); // Close menu after click
                  }}
                  className={`block py-2 ${
                    active === item.path
                      ? "text-blue-900 font-bold"
                      : "text-gray-700 hover:text-[#8B0000]"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Optional: Right icons for mobile */}
            <li className="flex items-center space-x-2 pt-4 border-t border-gray-300">
              {/* Search Icon */}
              <div
                onClick={() => setShowSearch(!showSearch)}
                className="cursor-pointer flex items-center"
              >
                <FaSearch className="text-gray-700 hover:text-blue-900" />
              </div>

              {/* Toggle Search Input */}
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3"
                  autoFocus
                />
              )}

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
        )}
      </nav>
    </header>
  );
};

export default Header;
// End of src/components/header/Header.jsx