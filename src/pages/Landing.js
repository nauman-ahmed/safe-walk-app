import React from "react";
import Header from "../Components/ui/header";
import Banner from "../Components/Landing/banner";
import Hero from "../Components/Landing/hero";
import Features from "../Components/Landing/features";
import FeaturesBlocks from "../Components/Landing/features-blocks";
import Testimonials from "../Components/Landing/testimonials";
import Newsletter from "../Components/Landing/newsletter";
import Footer from "../Components/ui/footer";

const LandingPage = () => {
  return (
    <div
      className={`font-lato antialiased bg-white text-gray-900 tracking-tight`}
    >
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />
        {/* {children} */}
        <Hero />
        <Features />
        <FeaturesBlocks />
         <Testimonials />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
