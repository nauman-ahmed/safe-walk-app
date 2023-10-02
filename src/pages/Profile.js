import React from 'react';
import Footer from '../Components/ui/footer';
import Header from '../Components/ui/header';

function Profile() {
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
              Aleena
            </h1>
            <p className="text-lg text-purple-300">Futuristic Enthusiast</p>

            {/* Additional Info */}
            <div className="mt-6">
              <p className="text-lg text-light-green-500">
                Location: New York, USA
              </p>
              <p className="text-lg text-light-green-500">
                Email: aleena@example.com
              </p>
              <p className="text-lg text-light-green-500">
                Interests: Technology, Space, AI
              </p>
              <p className="text-lg text-light-green-500">
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
