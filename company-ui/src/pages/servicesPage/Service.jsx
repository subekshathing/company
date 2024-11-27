import React from "react";
import OurServicesCard from "./components/services_list";
import ServiceImage from "./components/services_image";
import OurServices from "../HomePage/components/SecondSection";

const Service = () => {
  return (
    <div>
      <ServiceImage />
      {/* <OurServicesCard /> */}
      <OurServices />
    </div>
  );
};

export default Service;
