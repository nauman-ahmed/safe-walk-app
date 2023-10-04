import React, { useEffect, useState } from "react";
import Header from "../Components/ui/header";
import Footer from "../Components/ui/footer";
import { getUserTrips } from "../API/api";
import { decodeToken } from "react-jwt";
import { Link, useNavigate } from "react-router-dom"; // Use Link from react-router-dom for navigation
import TravelingImage from "../images/traveling.png";
function HistoryPage() {
  const navigate = useNavigate();
  const [historyData, setHistoryData] = useState(null);

  useEffect(() => {
    let storageData = localStorage.getItem("authorization");
    let details = decodeToken(storageData);
    getUserTrips({ details }).then((res) => {
      let arra = [];
      for (let index = 0; index < res.length; index++) {
        for (
          let index1 = 0;
          index1 < res[index].destinations.length;
          index1++
        ) {
          arra.push({
            source: res[index].sourceAddress,
            destination: res[index].destinations[index1],
          });
        }
      }
      console.log("getUserTrips", arra);
      setHistoryData(arra);
    });
  }, []);

  if (!localStorage.getItem("authorization")) {
    return navigate("/");
  }

  return (
    <div className={`font-lato antialiased text-gray-900 tracking-tight`}>
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />

        <div className="bg-black pt-36">
          {/* Hero Section */}
          <div className="bg-black py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-3xl mb-5 font-semibold text-green-500 mb-4">
                My Traveling History
              </h1>
              <div className="mb-8 mt-5">
                {/* Add your image here */}
                <img
                  src={TravelingImage} // Replace with your image URL
                  alt="Traveling History"
                  className="w-48 mx-auto rounded-full"
                />
              </div>
            </div>
          </div>
          {/* History Table */}
          <div className="bg-black max-w-4xl mx-auto py-11 px-4 ">
            <table className="w-full border-collapse border border-green-500">
              <thead>
                <tr className="bg-purple-900">
                  <th className="border border-green-500 py-2 px-4 text-white">
                    From
                  </th>
                  <th className="border border-green-500 py-2 px-4 text-white">
                    To
                  </th>
                </tr>
              </thead>
              <tbody>
                {historyData &&
                  historyData.map((entry, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-purple-800" : "bg-purple-900"
                      } text-green-500`}
                    >
                      <td className="border border-green-500 py-2 px-4 text-white">
                        {entry.source}
                      </td>
                      <td className="border border-green-500 py-2 px-4 text-white">
                        {entry.destination}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HistoryPage;
