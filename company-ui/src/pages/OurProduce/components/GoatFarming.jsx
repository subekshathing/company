import React from "react";
import { Box, Typography, CardMedia, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import goatImage from "../../../assets/images/goatfarm.jpg"; // Replace with a goat image

const GoatFarming = () => {
  return (
    <Box
      sx={{
        padding: "3rem 2rem",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        marginTop: "3rem"
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "bold",
          color: "#2c3e50"
        }}
      >
        Goat Farming
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Goat Farming Overview Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#34495e"
              }}
            >
              Goat Farming Overview
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#7f8c8d",
                textAlign: "justify",
                lineHeight: 1.6
              }}
            >
              Goat farming is a highly beneficial agricultural practice that
              offers numerous advantages, including the production of quality
              meat, which is leaner and healthier than traditional meats, and is
              in high demand for its nutritional value. It also provides
              opportunities for selective breeding, improving herd genetics for
              better meat, and fiber production. Additionally, goat manure is an
              excellent organic fertilizer that enriches soil and promotes
              sustainable farming. Goat farming helps reduce reliance on
              imported meat, ensuring a local, cost-effective supply while
              boosting the local economy. Furthermore, it creates valuable
              employment opportunities in rural areas, supporting livelihoods
              and fostering economic growth.
            </Typography>
          </Box>
        </Grid>

        {/* Goat Image */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={goatImage}
            alt="Goat Farming"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
            }}
          />
        </Grid>
      </Grid>

      {/* Goat Farming Benefits Section */}
      <Box sx={{ marginTop: "3rem" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            color: "#2c3e50"
          }}
        >
          Benefits of Goat Farming
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", padding: "1.5rem" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2980b9" }}
              >
                1. Quality Meat Production
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#7f8c8d",
                  textAlign: "justify",
                  marginTop: "1rem",
                  lineHeight: 1.6
                }}
              >
                Goat meat is lean, flavorful, and a healthy alternative to beef
                or pork. With lower fat content, goat meat is rich in protein
                and essential nutrients, making it a desirable meat source for
                consumers seeking healthier options. Its also popular in various
                cuisines globally.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", padding: "1.5rem" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2980b9" }}
              >
                2. Breeding Opportunities
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#7f8c8d",
                  textAlign: "justify",
                  marginTop: "1rem",
                  lineHeight: 1.6
                }}
              >
                Goat farming provides ample opportunities for breeding
                high-quality goats. By selecting the best stock for breeding,
                farmers can increase herd quality, improve milk and meat
                production, and enhance genetic traits, leading to a healthier
                and more productive farm.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", padding: "1.5rem" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2980b9" }}
              >
                3. Goat Fertilizer Production
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#7f8c8d",
                  textAlign: "justify",
                  marginTop: "1rem",
                  lineHeight: 1.6
                }}
              >
                Goat manure is a valuable organic fertilizer that can be used to
                enrich soil and improve crop yields. It’s an eco-friendly
                alternative to chemical fertilizers and contributes to
                sustainable farming practices.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", padding: "1.5rem" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2980b9" }}
              >
                4. Reducing Dependence on Imported Meat
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#7f8c8d",
                  textAlign: "justify",
                  marginTop: "1rem",
                  lineHeight: 1.6
                }}
              >
                By promoting local goat farming, we can reduce the need for
                importing foreign meat, ensuring a stable, cost-effective supply
                of fresh, locally produced meat. This helps in strengthening the
                local economy and reducing reliance on external markets.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "center", padding: "1.5rem" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#2980b9" }}
              >
                5. Employment Opportunities
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#7f8c8d",
                  textAlign: "justify",
                  marginTop: "1rem",
                  lineHeight: 1.6
                }}
              >
                Goat farming provides significant employment opportunities for
                local communities. From farm labor to processing and marketing,
                goat farming creates jobs, empowers workers, and contributes to
                poverty alleviation by providing sustainable livelihoods.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Call-to-Action Button */}
      <Box sx={{ textAlign: "center", marginTop: "3rem" }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/shop"
          sx={{
            fontSize: "1.2rem",
            padding: "0.8rem 2rem",
            borderRadius: "5px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
          }}
        >
          Start Your Goat Farming Journey
        </Button>
      </Box>
    </Box>
  );
};

export default GoatFarming;
