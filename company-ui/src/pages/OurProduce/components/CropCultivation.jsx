import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import maize from "../../../assets/images/maize.jpg"; // You can replace this with different crop images later
import millete from "../../../assets/images/millete.jpg";
import ginger from "../../../assets/images/ginger.jpg";

const CropCultivation = () => {
  const cropItems = [
    {
      id: 1,
      name: "Maize",
      description:
        "Maize, also known as corn, is one of the most important staple crops worldwide. It is grown for food, animal feed, and industrial products such as biofuels and corn syrup. Maize thrives in warm climates and is versatile in its use, offering a high yield with the potential for multiple harvests in a season. It is a vital part of many agricultural economies due to its adaptability and broad application.",
      image: maize
    },
    {
      id: 2,
      name: "Millet",
      description:
        "Millet is a group of small, round grains widely cultivated in Asia, Africa, and parts of Europe. Known for its drought tolerance and resilience in arid conditions, millet is an excellent choice for regions facing water scarcity. It is rich in essential nutrients such as protein, fiber, and vitamins, making it a nutritious addition to the diet. Millet is used in various food products and is considered a key crop for sustainable agriculture.",
      image: millete
    },
    {
      id: 3,
      name: "Ginger",
      description:
        "Ginger is a tropical plant known for its pungent rhizomes, which are used both in culinary dishes and traditional medicine. It has a long history of being valued for its anti-inflammatory properties and digestive benefits. Ginger thrives in warm, humid climates and requires well-drained, fertile soil to produce the best quality roots. It is a valuable cash crop in many regions, widely used in spices, teas, and health supplements.",
      image: ginger
    }
    // Add more crop items here as needed
  ];

  return (
    <Box
      sx={{
        padding: { xs: "1rem", sm: "2rem" }, // Adjust padding for smaller screens
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        marginTop: "3rem"
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2.5rem" } // Adjust font size for responsiveness
        }}
      >
        Crop Cultivation
      </Typography>

      {cropItems.map((cropItem, index) => (
        <Box
          key={cropItem.id}
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
            flexDirection: {
              xs: "column",
              sm: index % 2 === 0 ? "row" : "row-reverse"
            }, // Alternate layout for larger screens
            gap: "2rem",
            textAlign: { xs: "center", sm: "left" } // Center text for mobile and left-align for larger screens
          }}
        >
          {/* Description */}
          <Box sx={{ flex: 1, textAlign: "justify" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                fontSize: { xs: "1.2rem", sm: "1.5rem" } // Adjust font size for responsiveness
              }}
            >
              {cropItem.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "1.5rem",
                fontSize: { xs: "0.9rem", sm: "1rem" } // Adjust font size for responsiveness
              }}
            >
              {cropItem.description}
            </Typography>
          </Box>

          {/* Image */}
          <CardMedia
            component="img"
            height="300"
            image={cropItem.image}
            alt={cropItem.name}
            sx={{
              width: { xs: "100%", sm: "350px" }, // Full width on mobile and fixed width on larger screens
              borderRadius: "10px",
              height: { xs: "auto", sm: "300px" } // Adjust height for mobile
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CropCultivation;
