import React from 'react';
import VideoThumb from '../../images/purple-map.png';
import ModalVideo from '../Landing/modal-video';
import Video from '../../videos/video.mp4';
export default function Hero() {
  return (
    <section className="relative bg-black text-white"> {/* Set the background to black and text color to white */}
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Define your gradients here */}
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#00FF00" offset="0%" /> {/* Light green color */}
              <stop stopColor="#800080" offset="77.402%" /> {/* Purple color */}
              <stop stopColor="#FFD700" offset="100%" /> {/* Gold color */}
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Safe Walk: </span>Your Trusted Companion for Secure Strollswonderful
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              Welcome to Safe Walk, the ultimate app designed to ensure your safety during your walks. With advanced features and real-time tracking, we've got you covered.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                <a className="btn text-white bg-green-500 hover:bg-green-600 w-full sm:w-auto sm:ml-4 rounded-full py-3 px-6" href="/map">
                  Map
                </a>

                </div>
                <div>


                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video={Video}
            videoWidth={1920}
            videoHeight={1080}
          />

        </div>

      </div>
    </section>
  );
}
