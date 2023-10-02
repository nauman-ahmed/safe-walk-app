import React, { useState, useEffect } from 'react';
import Logo from './logo'; // Replace with the correct path to your Logo component
import MobileMenu from './mobile-menu'; // Replace with the correct path to your MobileMenu component
import { Link } from 'react-router-dom'; // Use Link from react-router-dom for navigation

export default function Header() {
  const [top, setTop] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Detect whether the user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed bg-gray-800 text-gray-200 w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? 'bg-white backdrop-blur-sm shadow-lg text-gray-800' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign-in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/signin"
                  className="font-medium transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/signup" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
                  <span>Sign up</span>
                </Link>
              </li>
              {/* Profile Avatar */}
              <li className="relative ml-3 h-10">
                <button
                  onClick={toggleDropdown}
                  className="focus:outline-none"
                >
                  <img
                    src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" // Replace with your avatar image URL
                    alt="Profile Avatar"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                </button>
                {/* Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 text-gray-900">
                    <ul className="py-2">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/history"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Trip History
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/settings"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}