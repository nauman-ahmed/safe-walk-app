import React, { useEffect, useState } from "react";
import Header from "../Components/ui/header";
import Footer from "../Components/ui/footer";
import { getUserTrips } from "../API/api";
import { decodeToken } from "react-jwt";
import { Link, useNavigate } from "react-router-dom"; // Use Link from react-router-dom for navigation

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
          <div className=" text-green-500 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-3xl font-semibold mb-4">My Traveling History</h1>
            </div>
          </div>
          {/* History Table */}
          <div className="bg-black max-w-4xl mx-auto py-11 px-4 mt-8">
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
          // ...
          {/* Additional Sections */}
          <div className="bg-black max-w-4xl mx-auto py-11 px-4 mt-8">
            {/* Section 1: Traveling and Its Benefits */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Traveling and Its Benefits
              </h2>
              <p className="text-white">
                Traveling allows you to explore new places, experience different
                cultures, and create lasting memories. It provides numerous
                benefits, including:
              </p>
              <ul className="list-disc list-inside text-white">
                <li>
                  Expanding your horizons and gaining a broader perspective.
                </li>
                <li>Learning about diverse traditions and lifestyles.</li>
                <li>
                  Building tolerance and understanding for different cultures.
                </li>
                <li>Enhancing your adaptability and problem-solving skills.</li>
                <li>
                  Creating opportunities for personal growth and self-discovery.
                </li>
                <li>
                  Enjoying relaxation and stress relief in beautiful
                  destinations.
                </li>
              </ul>
            </div>

            {/* Section 2: More About Travel */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                More About Travel
              </h2>
              <p className="text-white">
                Traveling not only enriches your life but also provides a sense
                of adventure and excitement. Here are some additional points to
                consider:
              </p>
              <ul className="list-disc list-inside text-white">
                <li>Exploring new cuisines and savoring delicious foods.</li>
                <li>Meeting interesting people and making new friends.</li>
                <li>
                  Documenting your journeys through photography and journals.
                </li>
                <li>
                  Planning your next destination and creating a travel bucket
                  list.
                </li>
                <li>Supporting local economies and sustainable tourism.</li>
              </ul>
            </div>
          </div>
          // ...
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HistoryPage;
