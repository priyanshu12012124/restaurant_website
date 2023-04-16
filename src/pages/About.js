import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";


const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 20,
          textAlign: "center",
          p: 4,
          "& h4": {
            fontWeight: "bold",
            my: 4,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
            color:"",
            
          },
          "@media (max-width:600px)": {
            "& h4 ": {
              fontSize: "1.10rem",
              
              
              
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To your own zaika </Typography>
        <p>
        Welcome to The apna zaika , where we specialize in serving up delicious, rustic cuisine made from the freshest ingredients available. Our restaurant is located in the heart of downtown, near lpu lawgate and we pride ourselves on providing a warm and inviting atmosphere for our guests.
        </p>
        <br />
        <p>
        Today, apna zaika has become a beloved destination for foodies and locals alike, thanks to our commitment to using only the best ingredients in our dishes. We work with local farmers and suppliers to source our produce, meat, and dairy, ensuring that everything we serve is fresh, seasonal, and delicious.

        Our menu features a variety of dishes inspired by classic European and American cuisine, with a focus on hearty, comforting flavors. From our homemade pasta dishes to our wood-fired pizzas, everything on our menu is made from scratch using traditional techniques.

        In addition to our restaurant, we also offer catering services for weddings, corporate events, and other special occasions. Our team of experienced chefs and servers will work with you to create a custom menu that fits your specific needs and preferences.

        apna zaika, we believe that food is more than just sustenance - it's a way of bringing people together and creating memories. Whether you're stopping by for a quick lunch or celebrating a special occasion with loved ones, we hope that our food and hospitality will make you feel right at home.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
