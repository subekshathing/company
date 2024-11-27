import React from "react";
import { Box, Typography, Grid, Paper, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GoatFertilizer = () => {
  const servicesList = [
    {
      title: "Natural Fertilizer for Goats",
      description:
        "We offer premium, natural fertilizers derived from goat manure, known for their rich organic content and superior nutrient levels. Our fertilizer helps improve soil quality, increase crop yield, and reduce dependency on chemical fertilizers. It’s ideal for both small-scale and large-scale farming operations. By using goat manure as a natural fertilizer, you can enrich your soil with essential nutrients, ensuring better crop growth and sustainability. Trust our eco-friendly solution for healthier, more fertile land.",
      bgColor: "#f1f8e9",
      textColor: "#558b2f"
    },
    {
      title: "Compost Fertilizer from Goats",
      description:
        "Our composted goat manure fertilizer is a rich organic option for soil improvement. Through the composting process, the manure is broken down into nutrient-dense material that enhances soil structure, promotes healthy plant growth, and increases water retention. This natural compost is perfect for all types of plants, including vegetables, fruits, and ornamental plants. By using our goat compost fertilizer, you contribute to sustainable farming practices while boosting your crop productivity.",
      bgColor: "#e8f5e9",
      textColor: "#388e3c"
    },
    {
      title: "Goat Manure for Sustainable Farming",
      description:
        "Goat manure is one of the most versatile and nutrient-rich organic fertilizers available. Our goat manure fertilizer supports the regeneration of soil health, promoting strong root growth, vibrant plants, and higher yields. We provide high-quality goat manure that is processed for optimal use in various farming applications, from crop cultivation to garden enhancement. Make your farm more sustainable and eco-friendly with our high-performance goat manure fertilizer.",
      bgColor: "#fff3e0",
      textColor: "#f57c00"
    }
  ];

  const testimonials = [
    {
      quote:
        "Using goat manure as fertilizer has greatly improved the soil fertility on our farm. Crops are healthier and yields are up. Highly recommend!",
      name: "Sarah Green",
      position: "Organic Farmer"
    },
    {
      quote:
        "The composted goat manure fertilizer has worked wonders in my garden. My plants are thriving, and I'm more confident in my soil's health.",
      name: "John Doe",
      position: "Hobby Gardener"
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
                  color: "#7cb342",
                  fontSize: { xs: "30px", sm: "40px" }
                }}
              >
                Goat Fertilizer for Sustainable Agriculture
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
                Our goat fertilizer services provide a natural and sustainable
                solution to enrich your soil. By using high-quality goat manure,
                our fertilizer helps improve the soil structure, water
                retention, and nutrient content, leading to healthier crops and
                more productive land. Whether you are growing vegetables,
                fruits, or flowers, our goat manure fertilizer can enhance the
                growth and quality of your plants. Join the movement towards
                more sustainable and eco-friendly farming practices.
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
                src="/src/assets/images/goat.jpg"
                alt="Goat Fertilizer"
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
            color: "#7cb342"
          }}
        >
          Our Goat Fertilizer Services
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
          Ready to Boost Your Soil Health?
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "18px", mb: 3 }}>
          Contact us today to learn more about how our goat fertilizer can help
          improve your farm’s productivity and sustainability.
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

export default GoatFertilizer;
