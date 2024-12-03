import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid
} from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { motion } from "framer-motion";
import crop from "../../assets/images/crop.jpg";
import goatfarm from "../../assets/images/goatfarm.jpg";
import seedling from "../../assets/images/seedling.png";

const OurProduce = () => {
  // src/data.js
  const products = [
    {
      id: 1,
      name: "Crop Cultivation",
      description:
        "We specialize in cultivating a variety of crops, including maize, millet, ginger, and more. Our focus is on sustainable farming practices to ensure high-quality produce that meets the needs of both farmers and consumers.",
      image: crop,
      link: "/crop-cultivation" // Add a link for each product
    },
    {
      id: 2,
      name: "Goat Farming",
      description:
        "We focus on raising goats for meat and breeding, prioritizing health, nutrition, and sustainable farming practices. Our methods ensure high productivity, offering quality meat while promoting eco-friendly growth and long-term success.",
      image: goatfarm,
      link: "/goat-farming" // Add a link for each product
    },
    {
      id: 3,
      name: "Seedling Production",
      description:
        "We produce high-quality seedlings for vegetables like tomatoes, onions, lentils, and more. Grown in a controlled nursery, our seedlings receive optimal care to ensure healthy growth before being transplanted into fields for better yields.",

      image: seedling,
      link: "/seedling-production" // Add a link for each product
    }

    // Add more products as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px"
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            fontWeight: 600,
            fontSize: "2.5rem",
            color: "#333"
          }}
        >
          Our Produce
        </Typography>

        {/* Subheading */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "1.1rem",
            color: "#777",
            lineHeight: "1.6",
            maxWidth: "800px",
            margin: "0 auto",
            fontWeight: "bold",
            p: "3rem"
          }}
        >
          Explore our wide range of organic fruits, vegetables, and livestock
          products. We prioritize quality and sustainability in every product.
        </Typography>

        {/* Product Grid */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ borderRadius: "10px", boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ borderRadius: "10px 10px 0 0" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: "1rem", textAlign: "justify" }}
                  >
                    {product.description}
                  </Typography>

                  {/* Learn More Button */}
                  <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={product.link}
                      sx={{ fontSize: "1rem", padding: "0.8rem 2rem" }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View Products Button */}
        <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/shop"
            sx={{ fontSize: "1rem", padding: "0.8rem 2rem" }}
          >
            View More Our Produces
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default OurProduce;
