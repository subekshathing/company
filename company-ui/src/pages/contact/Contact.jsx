import { Box } from "@mui/material";
import React from "react";
import ContactPage from "./components/ContactPage";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <Box>
      <ContactPage />
      <ContactForm />
    </Box>
  );
};

export default Contact;
