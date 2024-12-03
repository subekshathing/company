import React from "react";
import { Box, Typography, CardMedia, Grid, Button } from "@mui/material";
import seedlingImage from "../../../assets/images/plants.jpg"; // Replace with actual seedling image
import onionImage from "../../../assets/images/onion.jpg"; // Replace with actual onion image
import tomatoImage from "../../../assets/images/seedling.png"; // Replace with actual tomato image
import lentilImage from "../../../assets/images/lentils.jpeg"; // Replace with actual lentil image

const SeedlingProduction = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        marginTop: "3rem"
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "bold"
        }}
      >
        Seedling Production
      </Typography>

      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Text Description */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            High-Quality Seedlings for Sustainable Farming
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "1.5rem", textAlign: "justify" }}
          >
            Seedling production plays a crucial role in agriculture by providing
            farmers with healthy, resilient, and well-nourished young plants. We
            specialize in producing high-quality seedlings of a variety of
            crops, such as vegetables, fruits, and medicinal plants. Our focus
            is to ensure that each seedling is cultivated under optimal
            conditions to guarantee strong root systems, disease resistance, and
            superior growth potential. By using innovative techniques and
            sustainable practices, we help farmers ensure a higher success rate
            in their farming activities, which leads to improved crop yields and
            sustainable farming practices.
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "1.5rem", textAlign: "justify" }}
          >
            Our seedling production process begins with selecting the best
            quality seeds and employing techniques that foster germination and
            strong early growth. We use environmentally friendly methods,
            minimizing the use of harmful pesticides and fertilizers.
            Additionally, our seedlings undergo rigorous quality control
            measures to ensure they are free from diseases and pests. This
            commitment to quality ensures that the seedlings we provide
            contribute to the growth of healthy crops that meet market demands.
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "1.5rem", textAlign: "justify" }}
          >
            Whether its for large-scale commercial farming or small family-owned
            operations, our seedlings offer the perfect start for a successful
            harvest. We are dedicated to supporting farmers by offering a wide
            selection of seedlings that cater to different agricultural needs
            and environments.
          </Typography>
        </Grid>

        {/* Right Section - Seedling Image */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={seedlingImage}
            alt="Seedling Production"
            sx={{
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />
        </Grid>
      </Grid>

      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginTop: "3rem",
          fontWeight: "bold"
        }}
      >
        Benefits of Quality Seedling Production
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Improved Crop Yields:</strong> Quality seedlings ensure
            stronger plants, which leads to better growth and ultimately higher
            crop yields.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Increased Sustainability:</strong> Using high-quality
            seedlings reduces the need for chemical inputs and minimizes crop
            losses.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Enhanced Disease Resistance:</strong> Seedlings grown in
            ideal conditions are more resilient to pests and diseases, reducing
            the risk of crop failure.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Cost-Effective Farming:</strong> Starting with strong
            seedlings reduces the cost of inputs such as fertilizers,
            pesticides, and water.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Faster Time to Harvest:</strong> Healthy seedlings allow for
            quicker and more efficient growth, reducing the time it takes to get
            to market.
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            <strong>Adaptability:</strong> Our diverse range of seedlings are
            suited to a variety of climates and growing conditions, helping
            farmers maximize their resources.
          </Typography>
        </Grid>
      </Grid>

      {/* Crop Images Section */}
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginTop: "3rem",
          fontWeight: "bold"
        }}
      >
        Our Seedlings for Various Crops
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: "2rem" }}>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            image={onionImage}
            alt="Onion Seedlings"
            sx={{
              width: "100%",
              height: "200px",
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            Onion Seedlings
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            image={tomatoImage}
            alt="Tomato Seedlings"
            sx={{
              width: "100%",
              height: "200px",
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            Tomato Seedlings
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            image={lentilImage}
            alt="Lentil Seedlings"
            sx={{
              width: "100%",
              height: "200px",
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            Lentil Seedlings
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SeedlingProduction;
