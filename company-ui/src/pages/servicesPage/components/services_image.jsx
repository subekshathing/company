import { Box, Typography } from "@mui/material";
import React from "react";
import backgroundImg from "../../../assets/background/service.jpg";

function ServiceImage() {
  return (
    <Box
      sx={{
        padding: "5rem 1rem",
        display: "flex",
        gap: "2rem",
        mt: "3rem",
        flexDirection: { xs: "column-reverse", sm: "row" }, // Stack image above text on small screens, side-by-side on large
        backgroundImage: `url(${backgroundImg})`, // Adding background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%", // Make the background span the full width
        position: "relative" // Ensure the background image covers the entire area
      }}
    >
      <Box
        sx={{
          width: { sx: "100%", lg: "100%" }, // Full width on small screens, 50% on large
          position: "relative",
          margin: "1rem",
          padding: "1.5rem", // Added padding to give space around the text
          backgroundColor: "rgba(255, 255, 255, 0.6)", // White with some transparency
          textAlign: "center", // Center the text inside the Box
          borderRadius: "1rem"
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
          Our Services
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.1rem",
              lg: "1.2rem"
            },
            textAlign: "justify",
            marginBottom: "2rem"
          }}
        >
          We offer a wide range of agricultural and veterinary services aimed at
          improving the health and productivity of your livestock and crops.
          Whether youre looking for expert treatment of livestock, pest control
          solutions, or advanced breeding techniques like artificial
          insemination, our services are designed to meet your needs.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.1rem",
              lg: "1.2rem"
            },
            textAlign: "justify",
            marginBottom: "2rem"
          }}
        >
          At our service center, we aim to ensure the highest standards of
          animal welfare and agricultural productivity. Our team of experts is
          committed to providing personalized, professional services tailored to
          your unique requirements.
        </Typography>
      </Box>
    </Box>
  );
}

export default ServiceImage;
