import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          mt: 5, 
          mx: 8, 
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 2,
            mx: 2, 
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography className="content" variant="h4">Welcome To My Restaurant</Typography>
        <p>
          Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
        </p>
        <br />
        <p>
        "Content" will include (but is not limited to) reviews, images, photos, audio, video, location data, nearby places, and all other forms of information or data. "Your content" or "Customer Content" means content that you upload, share or transmit to, through or in connection with the Services, such as likes, ratings, reviews, images, photos, messages, chat communication, profile information, or any other materials that you publicly display or displayed in your account profile. "Zomato Content" means content that Zomato creates and make available in connection with the Services including, but not limited to, visual interfaces, interactive features, graphics, design, compilation, computer code, products, software, aggregate ratings, reports and other usage-related data in connection with activities associated with your account and all other elements and components of the Services excluding Your Content and Third Party Content. "Third Party Content" means content that comes from parties other than Zomato or its Customers, such as Restaurant Partners and is available on the Services.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
