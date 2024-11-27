import React from "react";

import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Box, IconButton, Typography } from "@mui/material";
import backgroundImg from "../../assets/images/contact.jpeg";

const ContactPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          maxWidth: "100%",
          margin: "0 auto",
          mt: 6
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.6)", // White with transparency
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
            padding: "3rem"
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "blue" }}>
            Raksirang Krishi and Pashu Firm Pvt. Ltd.:
          </Typography>
          <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Company Name: <br />
              <Typography variant="body3" sx={{ fontWeight: "normal" }}>
                Raksirang Krishi and Pashu Firm Pvt. Ltd.
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Address: <br />
              <Typography variant="body3" sx={{ fontWeight: "normal" }}>
                Manahari-7, Ramantar, Mane Dada
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Phone Number: <br />
              <Typography variant="body3" sx={{ fontWeight: "normal" }}>
                9855070362
              </Typography>
            </Typography>
          </Box>
          <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Email Address: <br />
              <Typography variant="body3" sx={{ fontWeight: "normal" }}>
                raksirangkrishiandpashufirm@gmail.com
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>

      <br />

      {/* Moving Text Section */}
      <Typography variant="h3" sx={{ fontWeight: "bold" }}>
        You can visit our company through this Google Map.
      </Typography>

      <br />

      {/* Google Map Embed Section */}
      <Box className="mapouter">
        <div className="gmap_canvas">
          <iframe
            style={{
              width: "100%",
              height: "100vh",
              frameBorder: "0",
              scrolling: "no",
              marginHeight: "0",
              marginWidth: "0"
            }}
            src="https://maps.google.com/maps?width=1739&amp;height=432&amp;hl=en&amp;q=raksirang%20krishi%20and%20pashu%20firm%20Pvt%20ltd,%20Ramauli-7,%20Manahari%2044106ford&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            title="Google Map of Our Location"
          ></iframe>
        </div>
      </Box>

      {/* Contact Section with Social Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 4,
          backgroundColor: "background.default"
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <IconButton
            href="mailto:raksirangkrishiandpashufirm@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "primary.main",
              padding: 3,
              borderRadius: "50%",
              boxShadow: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "primary.dark",
                boxShadow: 6
              }
            }}
          >
            <MdEmail size={30} color="white" />
          </IconButton>

          <IconButton
            href="http://m.me/ernest_achiever"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "info.main",
              padding: 3,
              borderRadius: "50%",
              boxShadow: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "info.dark",
                boxShadow: 6
              }
            }}
          >
            <BsMessenger size={30} color="white" />
          </IconButton>

          <IconButton
            href="https://wa.me/+9779855070362"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "success.main",
              padding: 3,
              borderRadius: "50%",
              boxShadow: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "success.dark",
                boxShadow: 6
              }
            }}
          >
            <IoLogoWhatsapp size={30} color="white" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
