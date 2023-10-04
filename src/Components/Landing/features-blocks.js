export default function FeaturesBlocks() {
  return (
    <section className="relative bg-black text-white">
      {" "}
      {/* Set the background to black and text color to white */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-green-500">
              Key Features of Safe Walk
            </h2>{" "}
            {/* Use green color for the header */}
            <p className="text-xl text-gray-600">
              Discover how Safe Walk ensures your safety during walks.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-purple-600 rounded shadow-xl">
              {" "}
              {/* Use purple color for the background */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                rx="32"
                viewBox="0 0 100 100"
                fill="#FF0000"
              >
                <circle cx="50" cy="50" r="40" fill="#FF0000" />

                <path
                  d="M50 20c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4s4-1.8 4-4V24c0-2.2-1.8-4-4-4z"
                  fill="#FFF"
                />

                <circle cx="50" cy="75" r="5" fill="#FFF" />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight my-1">
                Real-time Safety Alerts
              </h4>
              <p className="text-white-600 text-center">
                {" "}
                Get instant safety alerts and notifications during your walks.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-purple-600 rounded shadow-xl">
              {" "}
              {/* Use purple color for the background */}
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 512 512"
              >
                <title>location-pin-glyph</title>
                <path d="M256,0C138.37,0,42.67,95.7,42.67,213.33c0,158.93,193.27,289.59,201.5,295.08a21.33,21.33,0,0,0,23.67,0c8.23-5.49,201.5-136.16,201.5-295.08C469.33,95.7,373.63,0,256,0Zm0,106.67A106.67,106.67,0,1,1,149.33,213.33,106.79,106.79,0,0,1,256,106.67ZM192,213.33a64,64,0,1,1,64,64A64.07,64.07,0,0,1,192,213.33Z" />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight my-1">
                GPS Tracking
              </h4>
              <p className="text-white-600 text-center">
                Share your real-time location with trusted contacts for added
                security.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-purple-600 rounded shadow-xl">
              {" "}
              {/* Use purple color for the background */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 100 100"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="50" cy="20" r="8" fill="black" />

                <line x1="50" y1="28" x2="50" y2="55" />

                <line x1="50" y1="36" x2="35" y2="45" />
                <line x1="50" y1="36" x2="65" y2="45" />

                <line x1="50" y1="55" x2="35" y2="70" />
                <line x1="50" y1="55" x2="65" y2="70" />
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight my-1">
                Walking History
              </h4>
              <p className="text-white-600 text-center">
                Access a 30-day walking history to track your walking routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
