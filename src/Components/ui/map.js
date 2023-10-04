import React, { useState, useEffect } from 'react';
import Logo from './logo'; // Replace with the correct path to your Logo component
import MobileMenu from './mobile-menu'; // Replace with the correct path to your MobileMenu component
import { Link, useNavigate } from 'react-router-dom'; // Use Link from react-router-dom for navigation
import PreviousMap from 'postcss/lib/previous-map';
import { ToastContainer, toast } from 'react-toastify';

export default function Header(props) {
  const [top, setTop] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const navigate = useNavigate()

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
  
  const handleSubmit = () => {
    if(name == "" || phoneNumber == ""){
      toast.error("Please Add Detaisl")
    }else{
      console.log("handleSubmit",name,phoneNumber)
      localStorage.setItem("contactName", name);
      localStorage.setItem("mobileNumber", phoneNumber);
  
      setName('');
      setPhoneNumber('');
      toast.success("Succefully Saved Contact")
    }
  }

  return (
    <header
      className={` bg-gray-800 text-gray-200 w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? 'bg-white backdrop-blur-sm shadow-lg text-gray-800' : ''
      }`}
    >
      <ToastContainer/>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <div className="py-2 px-3 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
            <form>
              <label className='text-white'>ADD EMERGENCY CONTACT</label>
              <input
                type="text"
                className="mx-3 rounded-md appearance-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                id="exampleContactName"
                aria-describedby="contactName"
                placeholder="  name"
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="examplePhoneNumber"></label>
              <input
                type="tel"
                className="rounded-md appearance-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                id="examplePhoneNumber"
                placeholder="  mobile number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button type="button" onClick={handleSubmit} className="ml-5 py-2 px-5 bg-green-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded-lg transition duration-300">  submit</button>
            </form>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign-in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              
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
                          onClick = {() => {
                            localStorage.removeItem("authorization")
                            navigate('/');
                          }}
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
