import React from "react";
import Header from "../Components/ui/header";
import Footer from "../Components/ui/footer";

function HistoryPage() {
  // Sample data for the history table
  const historyData = [
    { from: "Location A", to: "Location B", timeTaken: "2 hours" },
    { from: "Location C", to: "Location D", timeTaken: "1.5 hours" },
  ];

  return (
    <div className={`font-lato antialiased text-gray-900 tracking-tight`}>
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />

        <div className="bg-black pt-36">
          {/* Hero Section */}
          <div className=" text-green-500 py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-3xl font-semibold mb-4">History Page</h1>
              <p className="text-xl text-purple-300">
                Welcome to your Travel history page!
              </p>
            </div>
          </div>

          {/* History Table */}
          <div className="bg-black max-w-4xl mx-auto py-11 px-4 mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-green-500">
              History Table
            </h2>
            <table className="w-full border-collapse border border-green-500">
              <thead>
                <tr className="bg-purple-900">
                  <th className="border border-green-500 py-2 px-4 text-green-500">
                    From
                  </th>
                  <th className="border border-green-500 py-2 px-4 text-green-500">
                    To
                  </th>
                  <th className="border border-green-500 py-2 px-4 text-green-500">
                    Time Taken
                  </th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((entry, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-purple-800" : "bg-purple-900"
                    } text-green-500`}
                  >
                    <td className="border border-green-500 py-2 px-4">
                      {entry.from}
                    </td>
                    <td className="border border-green-500 py-2 px-4">
                      {entry.to}
                    </td>
                    <td className="border border-green-500 py-2 px-4">
                      {entry.timeTaken}
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
