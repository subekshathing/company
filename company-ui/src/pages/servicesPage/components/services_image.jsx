import { Box } from "@mui/material";
import React from "react";

function ServiceImage() {
  // Local image path from the public folder
  const ImageUrl = "/src/assets/background/service.jpg"; // Adjust the path to match where the image is stored

  return (
    <div
      style={{
        backgroundImage: `url(${ImageUrl})`,
        backgroundSize: "cover", // Ensure the background covers the whole div
        backgroundPosition: "center", // Center the background image
        height: "100vh", // Full viewport height
        display: "flex", // Use flexbox to center the content
        justifyContent: "center", // Center horizontally
        alignItems: "center" // Center vertically
      }}
    >
      <Box
        sx={{
          width: { sx: "100%", lg: "50%" }, // Full width on small screens, 50% on large
          position: "relative",
          zIndex: 2,
          padding: "1.5rem", // Added padding to give space around the text
          backgroundColor: "rgba(255, 255, 255, 0.6)", // White with some transparency
          textAlign: "center", // Center the text inside the Box
          p: 3,
          m: 3
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Our Services</h2>
        <p style={{ fontSize: "16px", color: "black" }}>
          We offer a wide range of agricultural and veterinary services aimed at
          improving the health and productivity of your livestock and crops.
          Whether youre looking for expert treatment of livestock, pest control
          solutions, or advanced breeding techniques like artificial
          insemination, our services are designed to meet your needs.
        </p>

        <p style={{ fontSize: "16px", color: "black" }}>
          At our service center, we aim to ensure the highest standards of
          animal welfare and agricultural productivity. Our team of experts is
          committed to providing personalized, professional services tailored to
          your unique requirements.
        </p>
      </Box>
    </div>
  );
}

export default ServiceImage;
