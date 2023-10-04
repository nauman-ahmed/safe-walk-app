import React, { useEffect, useState } from "react";
import Footer from "../Components/ui/footer";
import Header from "../Components/ui/header";
import { getUser } from "../API/api";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let storageData = localStorage.getItem("authorization");
    let details = decodeToken(storageData);
    getUser({ details }).then((res) => {
      setUser(res);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., update user data)
    // You can access form values using e.target.<input_name>.value
    // For example, e.target.firstName.value to access the first name input value
  };

  if (!localStorage.getItem("authorization")) {
    return navigate("/");
  }

  return (
    <div className="font-lato antialiased bg-gray-100 min-h-screen">
      <Header />
      <div className="bg-black text-light-green-500 pb-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
          {/* User Card (Left) */}
          <div className="w-1/3 bg-purple-800 p-8 rounded-lg shadow-xl">
            <div className="flex flex-col items-center">
              <img
                src="https://i.postimg.cc/BvNYhMHS/user-img.jpg"
                alt="User"
                className="w-32 h-32 rounded-full border-4 border-light-green-500"
              />
              <h1 className="text-3xl font-semibold text-light-green-500 mt-4">
                {user && user.firstName} {user && user.lastName}
              </h1>
              <p className="text-lg text-purple-300">Futuristic Enthusiast</p>
            </div>
            {/* Additional Info */}
            <div className="mt-6">
              <p className="text-lg text-light-white-500">
                Location: New York, USA
              </p>
              <p className="text-lg text-light-white-500">
                Email: {user && user.email}
              </p>
              <p className="text-lg text-light-white-500">
                Interests: Technology, Space, AI
              </p>
              <p className="text-lg text-light-white-500">
                Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam placerat risus sed gravida.
              </p>
            </div>
          </div>

          {/* User Data Update Form (Right) */}
          <div className="w-2/3 px-4">
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Update Your Data</h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 shadow-xl"
              >

                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="interests"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Interests
                  </label>
                  <input
                    type="text"
                    id="interests"
                    name="interests"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="bio"
                    className="block text-gray-600 text-sm mb-2"
                  >
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    className="form-textarea shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-light-green-500 text-white border border-blue-400 bg-black px-4 py-2 rounded hover:bg-light-green-600 transition duration-300"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
