import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "94f6a59c-2b5e-4bec-a051-755a45d759e7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <Box
      sx={{
        padding: { xs: "40px", sm: "60px", md: "80px 170px" }, // Responsive padding
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack elements on small screens
        alignItems: "center",
        gap: { xs: "40px", sm: "80px" } // Adjust gap between sections based on screen size
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          width: { xs: "100%", sm: "50%" } // Adjust width for small screens
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "50px", sm: "60px", md: "80px" }, // Responsive font size
            fontWeight: 700,
            background: "linear-gradient(270deg, #df8908 80px, #0eab38 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Lets talk
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "550px",
            color: "#555",
            fontSize: "20px",
            lineHeight: "35px",
            textAlign: { xs: "center", sm: "left" } // Center text on small screens
          }}
        >
          Have a project in mind or need help with your next digital venture?
          We’re here to turn your ideas into reality. Reach out to us today, and
          let’s start a conversation about how we can work together!
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ width: { xs: "100%", sm: "50%" } }}
      >
        <TextField
          label="Your Name"
          name="name"
          fullWidth
          variant="outlined"
          sx={{
            background: "#fff",
            color: "#555",
            fontSize: "20px",
            borderRadius: "4px",
            mb: "20px"
          }}
        />
        <TextField
          label="Your Email"
          name="email"
          type="email"
          fullWidth
          variant="outlined"
          sx={{
            background: "#fff",
            color: "#555",
            fontSize: "20px",
            borderRadius: "4px",
            mb: "20px"
          }}
        />
        <TextField
          label="Write your message here"
          name="message"
          fullWidth
          multiline
          rows={8}
          variant="outlined"
          sx={{
            background: "#fff",
            color: "#555",
            fontSize: "20px",
            borderRadius: "4px",
            mb: "20px"
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#0eab38", // Custom color for button
            color: "#fff",
            padding: "15px 40px",
            fontSize: "18px",
            width: "100%", // Make button full width on small screens
            "&:hover": {
              backgroundColor: "#df8908" // Hover effect color
            }
          }}
        >
          Submit now
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
