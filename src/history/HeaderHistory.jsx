import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  // match menu names to routes
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Contact us", path: "/contact" },
    { name: "Document", path: "/documents" },
  ];
  return (
    <header>
      <nav className="bg-yellow-500 shadow-sm font-[Poppins]">
        <div className="container mx-auto flex justify-between items-center p-4 h-[80px] bg-green-500">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-900 bg-pink-500">LOGO COMPANY</div>
          {/* Menu */}
          <ul className="hidden md:flex space-x-8 text-lg bg-red-500">
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
          {/* Right icons */}
          <div className="hidden md:flex items-center space-x-4">
            <FaSearch className="text-gray-700 cursor-pointer hover:text-blue-900" />
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-blue-900">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                alt="UK flag"
                className="w-5 h-5"
              />
              <span>English</span>
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
            <button>
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
      </nav>
    </header>
  );
};

export default Header;