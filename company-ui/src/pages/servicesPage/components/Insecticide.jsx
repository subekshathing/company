import React from "react";
import { Box, Typography, Grid, Paper, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InsecticidesAndPesticides = () => {
  const servicesList = [
    {
      title: "Pest Control Solutions",
      description:
        "Protect your crops and livestock from harmful pests with our advanced pest control solutions. Our environmentally friendly insecticides and pesticides are designed to target specific pests without harming the surrounding ecosystem. We focus on ensuring the safety and productivity of your farm while minimizing environmental impact.",
      bgColor: "#fce4ec",
      textColor: "#d81b60"
    },
    {
      title: "Integrated Pest Management",
      description:
        "Our Integrated Pest Management (IPM) approach combines biological, cultural, and chemical tools to manage pests effectively. This holistic strategy minimizes the reliance on chemical pesticides while promoting sustainable farming practices. Let us help you build a healthier and more resilient farming system.",
      bgColor: "#ede7f6",
      textColor: "#512da8"
    },
    {
      title: "Soil and Crop Protection",
      description:
        "Ensure the safety of your soil and crops with our targeted protection services. Our solutions prevent pest damage while preserving soil quality, helping you maintain a productive and sustainable farming operation. We provide expert guidance to maximize the efficiency of pest control treatments.",
      bgColor: "#e8f5e9",
      textColor: "#388e3c"
    }
  ];

  const testimonials = [
    {
      quote:
        "Their pest control solutions saved our crops. Highly recommended!",
      name: "Emily Watson",
      position: "Farm Owner"
    },
    {
      quote:
        "Thanks to their IPM strategies, our farm is more sustainable than ever.",
      name: "Michael Carter",
      position: "Agricultural Specialist"
    }
  ];

  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "4rem 0",
        color: "white",
        filter: "brightness(70%)"
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          padding: "3rem",
          color: "white"
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#2d6a4f",
                  fontSize: { xs: "30px", sm: "40px" }
                }}
              >
                Effective Insecticide & Pesticide Services
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  mb: 3,
                  textAlign: "justify",
                  color: "#555"
                }}
              >
                Protect your farms crops and livestock with our advanced
                insecticide and pesticide services. Using safe and sustainable
                practices, we ensure that pests are controlled without
                compromising the environment. Our expert team provides tailored
                solutions to maximize productivity and preserve the health of
                your farm. Explore our range of services below and let us help
                you maintain a pest-free environment for sustainable farming.
              </Typography>
            </motion.div>
          </Grid>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src="/src/assets/images/inse.jpg"
                alt="Insecticides and Pesticides"
                sx={{
                  width: { xs: "300px", lg: "500px" }, // Set a specific size for the circular image
                  height: { xs: "300px", lg: "500px" },
                  borderRadius: "50%", // Makes the image circular
                  objectFit: "cover", // Ensures the image is properly contained
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      {/* Services Section */}
      <Container sx={{ paddingTop: "4rem" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: 4,
            color: "#2d6a4f"
          }}
        >
          Our Insecticide & Pesticide Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {servicesList.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Paper
                  sx={{
                    padding: "2rem",
                    backgroundColor: service.bgColor,
                    borderRadius: "8px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "all 0.3s ease"
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: service.textColor }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, textAlign: "justify" }}
                  >
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box
        sx={{
          padding: "4rem 0"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 3,
            textAlign: "center",
            color: "#555"
          }}
        >
          What Our Clients Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: "2rem",
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                }}
              >
                <Typography variant="body1" sx={{ color: "#555", mb: 1 }}>
                  {testimonial.quote}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", color: "#2d6a4f" }}
                >
                  {testimonial.name}, {testimonial.position}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          padding: "4rem",
          color: "#555",
          textAlign: "center"
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Ready to Protect Your Farm from Pests?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "18px", mb: 3 }}>
          Contact us today to schedule a consultation and learn more about our
          services.
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "0.75rem 2rem",
            fontWeight: "bold",
            backgroundColor: "#d81b60",
            ":hover": { backgroundColor: "#ad1457" }
          }}
          component={Link}
          to="/contact"
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
};

export default InsecticidesAndPesticides;
