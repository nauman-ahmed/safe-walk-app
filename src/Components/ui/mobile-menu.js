import React, { useState, useRef, useEffect } from 'react';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    window.addEventListener('click', clickHandler);
    return () => window.removeEventListener('click', clickHandler);
  }, [mobileNavOpen]);

  // Close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    window.addEventListener('keydown', keyHandler);
    return () => window.removeEventListener('keydown', keyHandler);
  }, [mobileNavOpen]);

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={toggleMobileMenu}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-6 h-6 fill-current text-gray-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/* Profile Avatar */}
      <div className="relative ml-3 h-10">
        <button onClick={toggleDropdown} className="focus:outline-none">
          <img
            src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" // Replace with your avatar image URL
            alt="Profile Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </button>
        {/* Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul className="py-2">
              <li>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                  onClick={() => {
                    toggleMobileMenu();
                    toggleDropdown();
                  }}
                >
                  My Profile
                </a>
              </li>
              <li>
                <a
                  href="/history"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                  onClick={() => {
                    toggleMobileMenu();
                    toggleDropdown();
                  }}
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                  onClick={() => {
                    toggleMobileMenu();
                    toggleDropdown();
                  }}
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        {mobileNavOpen && (
          <nav
            id="mobile-nav"
            className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white text-gray-800"
          >
            <ul className="px-5 py-2">
              <li>
                <a
                  href="/signin"
                  className="block py-2 px-4 text-sm hover:bg-gray-200"
                  onClick={toggleMobileMenu}
                >
                  Sign in
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="block py-2 px-4 text-sm hover:bg-gray-200"
                  onClick={toggleMobileMenu}
                >
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
