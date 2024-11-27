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
import { products } from "../../../../src/data.js"; // Importing the products data

const OurProducts = () => {
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
          Our Products
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
                    sx={{ marginBottom: "1rem" }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {product.price}
                  </Typography>
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
            View More Products
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default OurProducts;
