import React from "react";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Promo from "../components/Promo";

/**
 * This component holds all the components that are required in the homepage
 * @returns A home page component
 */
const HomePage = () => {
  return (
    <div className="text-[#444]">
      <Header />
      <div className="sm:min-h-[200px]">
        <MainBanner />
      </div>
      <div className="sm:min-h-[200px]">
        <Promo />
      </div>
    </div>
  );
};

export default HomePage;
