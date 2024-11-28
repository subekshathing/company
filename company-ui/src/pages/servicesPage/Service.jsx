import React from "react";

import ServiceImage from "./components/services_image";
import OurServices from "./components/services_list";

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
