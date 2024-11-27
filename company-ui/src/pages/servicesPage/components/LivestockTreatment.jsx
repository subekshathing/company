import React from "react";
import { Box, Typography, Grid, Paper, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LivestockTreatment = () => {
  const servicesList = [
    {
      title: "Vaccinations",
      description:
        "Protect your livestock from preventable diseases with our comprehensive vaccination programs. Our tailored vaccination schedules are designed to meet the specific needs of your herd, ensuring optimal immunity against common illnesses. By safeguarding your animals’ health, you can reduce the risk of disease outbreaks, improve overall productivity, and minimize veterinary costs in the long run. Whether you’re managing cattle, sheep, goats, or poultry, our team of experienced veterinarians is here to provide expert guidance and effective solutions to keep your livestock healthy and thriving.",
      bgColor: "#d1e7d7",
      textColor: "#388e3c"
    },
    {
      title: "Health Checks",
      description:
        "Ensure the long-term health and well-being of your livestock with our regular health check services. Our veterinarians perform thorough examinations to detect potential health issues early, helping to prevent serious illnesses and costly treatments. From monitoring vital signs and nutritional health to identifying signs of stress or disease, we provide a comprehensive assessment tailored to your herd's needs. Routine health checks not only improve the quality of life for your animals but also enhance productivity and longevity, ensuring a healthier and more profitable operation for you.",
      bgColor: "#e3f2f1",
      textColor: "#00796b"
    },
    {
      title: "Emergency Care",
      description:
        "When unexpected situations arise, our 24/7 emergency care service is here to provide immediate assistance for your livestock. From injuries and birthing complications to sudden illnesses, our team of experienced veterinarians is ready to respond at any time, day or night. Equipped with state-of-the-art tools and a compassionate approach, we ensure your animals receive prompt and effective treatment when they need it most. Trust us to deliver reliable emergency care that prioritizes the well-being and recovery of your livestock, safeguarding your operation against unforeseen challenges.",
      bgColor: "#ffe0b2",
      textColor: "#f57c00"
    }
  ];

  const testimonials = [
    {
      quote:
        "The livestock treatment services were excellent. Our animals are in great health!",
      name: "John Doe",
      position: "Farm Owner"
    },
    {
      quote:
        "Highly recommend their health checkups. Fast and professional service.",
      name: "Jane Smith",
      position: "Veterinarian"
    }
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url('https://your-image-link.jpg')",
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
                  color: "#30963e",
                  fontSize: { xs: "30px", sm: "40px" }
                }}
              >
                Expert Livestock Treatment Services
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
                We are dedicated to providing comprehensive and expert care for
                your livestock to ensure their health, productivity, and
                longevity. Our team of experienced veterinarians and livestock
                specialists uses the latest techniques and technologies to
                address various health challenges effectively. From preventative
                care, like vaccinations and routine health checks, to critical
                emergency treatments, we aim to safeguard your animals
                well-being. Trust us to be your partner in maintaining a healthy
                and thriving farm, delivering personalized solutions tailored to
                your specific livestock needs. Explore our range of services
                below and take the first step toward enhanced livestock care.
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
                src="/src/assets/images/treat.jpg"
                alt="Livestock Treatment"
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
            color: "#30963e"
          }}
        >
          Our Livestock Treatment Services
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
                  sx={{ fontWeight: "bold", color: "#388e3c" }}
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
          Ready to Improve the Health of Your Livestock?
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
            backgroundColor: "#f57c00",
            ":hover": { backgroundColor: "#d35f00" }
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

export default LivestockTreatment;
