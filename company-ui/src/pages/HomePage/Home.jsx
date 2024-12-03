import React from "react";
import FirstSectionHomePage from "./components/FirstSectionHomePage";
// import OurProducts from "./components/OurProducts";

import "../../../global.css";

import OurServices from "../servicesPage/components/services_list";
import OurProduce from "../OurProduce/OurProduce";

const Home = () => {
  return (
    <div>
      <FirstSectionHomePage />

      <OurProduce />
      <OurServices />
    </div>
  );
};

export default Home;
