import React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { motion } from "framer-motion";
import { servicesList } from "../../../constants/general.costants";

const OurServicesCard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('path_to_background_image/background.jpg')`, // Add the URL or path to the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem"
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        color="black"
        sx={{ fontWeight: "bold" }}
      >
        Our Services
      </Typography>
      <Divider flexItem sx={{ my: "0.5rem", borderWidth: 1 }} />
      <Grid container spacing={3} justifyContent="center">
        {servicesList.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Box
                sx={{
                  padding: "1.5rem",
                  borderRadius: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundImage: service.image,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  p: "1rem"
                }}
              >
                <Box
                  sx={{
                    padding: "1rem", // Padding around the text
                    borderRadius: "8px", // Rounded corners for text container
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    height: "15rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem"
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="black" // White text color for contrast
                    sx={{ fontWeight: "bold" }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: "1rem",
                      color: "black" // White text color for description
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="success"
                    component={Link}
                    to={service.link}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServicesCard;
