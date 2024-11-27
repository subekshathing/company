import React from "react";
import { Box, Typography, Grid, Paper, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ArtificialInsemination = () => {
  const servicesList = [
    {
      title: "Cattle Insemination",
      description:
        "Our cattle artificial insemination service offers precision breeding techniques to improve herd genetics and productivity. By selecting high-quality semen from proven bulls, we ensure the optimal genetic potential for your herd, leading to enhanced milk production, better disease resistance, and superior overall performance. Our experienced team ensures timely and effective insemination for the best results, helping you improve herd management and long-term profitability.",
      bgColor: "#e3f2f1",
      textColor: "#00796b"
    },
    {
      title: "Sheep & Goat Insemination",
      description:
        "We offer specialized artificial insemination services for sheep and goats to enhance the genetic quality of your flock or herd. Our veterinary experts use the latest insemination techniques to increase the likelihood of successful pregnancies, resulting in healthier offspring and improved meat and milk production. With our expert guidance, you can boost the genetic potential of your livestock, leading to improved productivity and profitability.",
      bgColor: "#d1e7d7",
      textColor: "#388e3c"
    },
    {
      title: "Poultry Insemination",
      description:
        "Our poultry artificial insemination services are designed to improve egg production and overall health within your poultry operation. By selecting superior genetics, we help increase egg quality and quantity, while also reducing the risk of genetic disorders. Our experts are equipped with the latest technology to ensure a successful insemination process, which contributes to healthier flocks and a more profitable poultry business.",
      bgColor: "#ffe0b2",
      textColor: "#f57c00"
    }
  ];

  const testimonials = [
    {
      quote:
        "The artificial insemination service has helped us significantly improve the genetic quality of our herd. Highly recommend!",
      name: "David Green",
      position: "Farm Manager"
    },
    {
      quote:
        "Professional service with great results. Our sheep herd is healthier and more productive thanks to their expertise.",
      name: "Emily White",
      position: "Livestock Breeder"
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
                  color: "#30963e",
                  fontSize: { xs: "30px", sm: "40px" }
                }}
              >
                Artificial Insemination Services for Livestock
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
                Our artificial insemination services are designed to improve the
                genetics and productivity of your livestock. Whether you are
                breeding cattle, sheep, goats, or poultry, our experienced
                veterinarians use the latest techniques to ensure high success
                rates and improved genetic traits. This service will help you
                achieve healthier, more productive livestock that can enhance
                the profitability and sustainability of your farm. Explore our
                specialized services below to see how we can help your farm
                grow.
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
                src="/src/assets/images/arti.jpg"
                alt="Artificial Insemination"
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
            color: "#30963e"
          }}
        >
          Our Artificial Insemination Services
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
          Ready to Improve Your Livestocks Genetics?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "18px", mb: 3 }}>
          Contact us today to schedule a consultation and learn more about our
          artificial insemination services.
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

export default ArtificialInsemination;
