import React from "react";
import { Box, Typography, Grid, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";
import backgroundImg from "../assets/images/about.jpeg"; // Import the image from your assets folder
import founderImg from "../assets/images/ba.jpeg";
// import headVetImg from "../assets/images/headvet.jpg";
// import managerImg from "../assets/images/manager.jpg";
// import accountant1Img from "../assets/images/Accountant1.jpg";
// import accountant2Img from "../assets/images/Accountant2.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Indra Bahadur Thing",
      role: "Founder & CEO",
      avatarUrl: founderImg, // Local image for Founder & CEO
      description:
        "As the visionary leader of our company, Indra oversees strategic planning, business growth, and innovation to ensure we provide unmatched services to the agricultural and livestock sectors."
    },
    {
      name: "Shuvechchha Thing",
      role: "Head of Veterinary Services",
      avatarUrl: founderImg, // Local image for Head of Veterinary Services
      description:
        "Shuvechchha leads our veterinary team, offering expert guidance on livestock health, animal welfare, and sustainable farming practices."
    },
    {
      name: "Suntali Bal",
      role: "Manager",
      avatarUrl: founderImg, // Local image for Manager
      description:
        "Suntali is responsible for coordinating daily operations, ensuring seamless collaboration across teams, and maintaining high standards of service delivery."
    },
    {
      name: " Prateekshya Thing",
      role: "Accountant_1",
      avatarUrl: founderImg, // Local image for Manager
      description:
        "Prateekshya manages financial records, oversees budgeting, and ensures compliance with financial regulations, keeping the company financially sound."
    },
    {
      name: "Samikshya Thing",
      role: "Accountant_2",
      avatarUrl: founderImg, // Local image for Manager
      description:
        "Samikshya supports financial operations by analyzing expenses, preparing reports, and assisting in long-term financial planning for the company."
    }
    // Add more team members as needed
  ];

  return (
    <Box sx={{ padding: "0" }}>
      <Box
        sx={{
          padding: "2rem",
          textAlign: "center",
          backgroundImage: `url(${backgroundImg})`, // Use the local image
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            width: "100%", // 40% of the full screen width
            position: "relative",
            padding: "1.5rem", // Padding around the text
            backgroundColor: "rgba(255, 255, 255, 0.6)", // White with transparency
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)", // Add a shadow for aesthetics
            display: "flex",
            flexDirection: "column",
            textAlign: "center", // Center content vertically within the box
            borderRadius: "1rem"
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: "24px",
              fontWeight: "bold"
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "0.9rem",
                sm: "1rem",
                md: "1.1rem",
                lg: "1.2rem"
              },
              textAlign: "justify",
              marginBottom: "2rem"
            }}
          >
            We are a leading agriculture and veterinary company dedicated to
            providing high-quality products and services for farmers and
            livestock owners. Our mission is to empower the agricultural
            community with innovative solutions, premium-grade supplies, and
            expert support to maximize productivity and sustainability. From
            crop care to animal health, we are committed to fostering growth and
            success for rural communities while preserving the environment for
            future generations.
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          marginTop: "3rem", // Add gap above the text
          marginBottom: "3rem", // Add gap below the text
          textAlign: "center", // Optional: center align the text
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem", lg: "4rem" }
        }}
      >
        Our Team
      </Typography>

      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Box
                sx={{
                  padding: "2rem",
                  backgroundColor: "#f3f3f3",
                  borderRadius: "10px",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <Avatar
                  src={member.avatarUrl}
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "bold", // Make the name bold
                    textAlign: "center" // Optional: center align
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: "1rem",
                    fontWeight: "bold", // Make the role bold
                    textAlign: "center" // Optional: center align
                  }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ marginBottom: "1rem", textAlign: "justify" }}
                >
                  {member.description}
                </Typography>
                <Button variant="contained" color="success">
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

export default About;
