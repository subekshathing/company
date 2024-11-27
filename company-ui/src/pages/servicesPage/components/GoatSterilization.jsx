import React from "react";
import { Box, Typography, Grid, Paper, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GoatSterilization = () => {
  const servicesList = [
    {
      title: "Safe and Effective Sterilization",
      description:
        "Our goat sterilization process ensures that your animals are safe and healthy. We use the latest techniques to ensure effective sterilization, minimizing any risk to the goats while enhancing their overall health and well-being. Our procedures are carried out by experienced veterinarians who prioritize the welfare of the animals.",
      bgColor: "#e3f2fd",
      textColor: "#1976d2"
    },
    {
      title: "Surgical Sterilization for Breeding Control",
      description:
        "Surgical sterilization is an important part of breeding control in goats. It helps to manage the population and avoid unwanted pregnancies while ensuring that the animal remains in good health. Our veterinary professionals perform these surgeries with great care and precision, ensuring a quick recovery for the goat.",
      bgColor: "#fffde7",
      textColor: "#fbc02d"
    },
    {
      title: "Non-Surgical Sterilization Options",
      description:
        "We also offer non-surgical sterilization options that are less invasive and allow for a faster recovery time. This option is ideal for farmers who prefer a less invasive approach to controlling the breeding and health of their goats while maintaining animal welfare standards.",
      bgColor: "#e8f5e9",
      textColor: "#388e3c"
    }
  ];

  const testimonials = [
    {
      quote:
        "Our farm has seen a significant reduction in unwanted pregnancies thanks to the sterilization services. It's made managing our herd much easier.",
      name: "Samuel Grant",
      position: "Farm Owner"
    },
    {
      quote:
        "The non-surgical sterilization option was perfect for us. The procedure was quick and the goats recovered faster than expected.",
      name: "Lydia Evans",
      position: "Veterinary Caretaker"
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
                  color: "#2196f3",
                  fontSize: { xs: "30px", sm: "40px" }
                }}
              >
                Goat Sterilization for Healthy Herds
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
                Sterilization is an essential practice for managing the health
                and breeding of goats. Our professional veterinary team ensures
                that the sterilization process is carried out safely,
                effectively, and with minimal discomfort to the animals. Whether
                you choose surgical or non-surgical options, we provide a
                reliable solution for controlling goat populations and enhancing
                herd management.
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
                src="/src/assets/images/steri.jpg"
                alt="Goat Sterilization"
                sx={{
                  width: { xs: "300px", lg: "500px" },
                  height: { xs: "300px", lg: "500px" },
                  borderRadius: "50%",
                  objectFit: "cover",
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
            color: "#2196f3"
          }}
        >
          Our Goat Sterilization Services
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
                  sx={{ fontWeight: "bold", color: "#2196f3" }}
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
          Ready to Manage Your Herds Health?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "18px", mb: 3 }}>
          Contact us today to schedule a consultation and learn more about how
          our goat sterilization services can help you maintain a healthy and
          well-managed herd.
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "0.75rem 2rem",
            fontWeight: "bold",
            backgroundColor: "#1976d2",
            ":hover": { backgroundColor: "#1565c0" }
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

export default GoatSterilization;
