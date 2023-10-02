import React, { useEffect, useState } from 'react';
import Footer from '../Components/ui/footer';
import Header from '../Components/ui/header';
import { getUser } from "../API/api"
import { decodeToken } from "react-jwt";
import { Link,useNavigate } from 'react-router-dom'; // Use Link from react-router-dom for navigation

function Profile() {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(()=>{
    let storageData = localStorage.getItem("authorization")
    let details = decodeToken(storageData)
    getUser({details}).then((res) => {
      setUser(res)
    })
  },[])

  if(!localStorage.getItem("authorization")){
    return navigate('/');
  }

  return (
    <div
      className={`font-lato antialiased bg-white text-gray-900 tracking-tight`}
    >
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <div className="bg-black text-light-green-500 pb-16 pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-purple-800 p-8 rounded-lg shadow-xl">
          <div className="flex items-center justify-center">
            <img
              src="https://i.postimg.cc/BvNYhMHS/user-img.jpg"
              alt="User"
              className="w-32 h-32 rounded-full border-4 border-light-green-500"
            />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-3xl font-semibold text-light-green-500">
             {user && user.firstName}  {user && user.lastName}  
            </h1>
            <p className="text-lg text-purple-300">Futuristic Enthusiast</p>

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
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </div>
  );
}

export default Profile;
