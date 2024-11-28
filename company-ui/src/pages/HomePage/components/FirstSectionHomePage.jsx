import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../../assets/images/logo.png"; // Replace with the path to your image
import backgroundImage from "../../../assets/background/header.jpg"; // Path to the background image

const HomePage = () => {
  return (
    <Box
      component="header"
      sx={{
        padding: "5rem 1rem",
        display: "flex",
        gap: "2rem",
        mt: "3rem",
        flexDirection: { xs: "column-reverse", sm: "row" }, // Stack image above text on small screens, side-by-side on large
        backgroundImage: `url(${backgroundImage})`, // Adding background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%", // Make the background span the full width
        position: "relative" // Ensure the background image covers the entire area
      }}
    >
      {/* Left Section (Text Section) */}
      <Box
        sx={{
          width: "100%", // Full width on small screens, 50% on large
          position: "relative",
          padding: "1.5rem", // Added padding to give space around the text
          backgroundColor: "rgba(255, 255, 255, 0.6)", // White with some transparency
          borderRadius: "1rem"
        }}
      >
        <Typography
          sx={{
            color: "#34495e",
            marginBottom: "1rem",
            fontSize: { xs: "1rem", sm: "1.75rem", md: "2rem" } // Responsive font size
          }}
        >
          #SustainableFarming
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
            margin: "1rem 0",
            color: "#2c3e50",
            fontWeight: "bold"
          }}
        >
          Join the Movement of Sustainable Farming
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }, // Responsive font size
            color: "black",
            marginBottom: "1.5rem",
            textAlign: "justify"
          }}
        >
          Discover innovative solutions for agriculture and livestock that lead
          to sustainable development and better practices. Our mission is to
          enhance the livelihoods of farmers while promoting environmental
          responsibility.
        </Typography>
        <Button
          component={Link}
          to="/services"
          variant="contained"
          color="primary"
          sx={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            textTransform: "none",
            backgroundColor: "#FFC107", // Golden color for a warm, organic feel
            "&:hover": {
              backgroundColor: "#ff9800"
            }
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Right Section (Image Section) */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", sm: "50%" }, // Full width on small screens
          marginBottom: { xs: "2rem", sm: "0" } // Add margin to the bottom on small screens
        }}
      >
        {/* Circular Background */}
        <Box
          sx={{
            position: "absolute",
            width: "300px", // Circle size for large screens
            height: "300px", // Circle size for large screens
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            zIndex: 1
          }}
        />
        {/* Image */}
        <Box
          component="img"
          src={Image}
          alt="Agriculture"
          sx={{
            width: { xs: "200px", sm: "300px" }, // Smaller image on small screens
            height: { xs: "200px", sm: "300px" }, // Smaller image on small screens
            borderRadius: "50%",
            objectFit: "cover",
            zIndex: 2,
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
            border: "8px solid #ffffff"
          }}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
