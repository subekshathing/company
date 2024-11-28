import React from "react";
import FirstSectionHomePage from "./components/FirstSectionHomePage";
// import OurProducts from "./components/OurProducts";

import "../../../global.css";
import OurProducts from "./components/OurProducts";
import OurServices from "../servicesPage/components/services_list";

const Home = () => {
  return (
    <div>
      <FirstSectionHomePage />
      <OurProducts />
      <OurServices />
    </div>
  );
};

export default Home;
