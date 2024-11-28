import React from "react";
import { Box, Typography, Button, Grid, Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { motion } from "framer-motion";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import PestControlIcon from "@mui/icons-material/PestControl";
import treat from "../../../assets/images/treatment1.jpg";
import insec from "../../../assets/images/insecticide.jpg";
import Artificial from "../../../assets/images/insemination.jpg";
import goatfer from "../../../assets/images/goatfert.jpg";
import goatstr from "../../../assets/images/ster.jpg";

const services = [
  {
    title: "Treatment of Livestocks",
    description:
      "Comprehensive healthcare services for livestock including vaccinations, deworming, and disease management.",
    link: "/livestock-treatment",
    icon: <VaccinesIcon />,
    image: treat
  },
  {
    title: "Insecticides or Pesticides",
    description:
      "Effective pest and insect management solutions to protect crops and livestock from harmful pests.",
    link: "/insecticides-pesticides",
    icon: <PestControlIcon />,
    image: insec
  },
  {
    title: "Artificial Insemination",
    description:
      "Expert artificial insemination services for improved breeding and genetic diversity.",
    link: "/artificial-insemination",
    icon: <VaccinesIcon />,
    image: Artificial
  },
  {
    title: "Goat Fertilizer",
    description:
      "High-quality organic goat fertilizer for enhancing soil fertility and crop growth.",
    link: "/goat-fertilizer",
    icon: <VaccinesIcon />,
    image: goatfer
  },
  {
    title: "Goat Sterilization",
    description:
      "High-quality organic goat fertilizer for enhancing soil fertility and crop growth.",
    link: "/goat-sterilization",
    icon: <VaccinesIcon />,
    image: goatstr
  }
];

const OurServices = () => {
  return (
    <Box
      sx={{
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
        {services.map((service, index) => (
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
                  height: "auto", // Adjusted height to fit content
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  backgroundColor: "#fff"
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    width: "100%",
                    height: "150px",
                    borderRadius: "10px",
                    overflow: "hidden"
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                  />
                </Box>

                {/* Service Title & Icon */}
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ marginTop: "1rem" }}
                >
                  {service.icon}
                  <Typography
                    variant="h5"
                    gutterBottom
                    color="black"
                    sx={{ fontWeight: "bold", marginLeft: "0.5rem" }}
                  >
                    {service.title}
                  </Typography>
                </Stack>

                {/* Service Description */}
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    color: "black",
                    textAlign: "justify"
                  }}
                >
                  {service.description}
                </Typography>

                {/* Button */}
                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  to={service.link}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurServices;
