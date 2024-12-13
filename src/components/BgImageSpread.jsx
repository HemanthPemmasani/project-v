import React from "react";
import Slider from "react-slick";
import { Box, Typography, Container } from "@mui/material";
import "./bgImageSpread.css";
const BgImageSpread = (props) => {
  if (!Array.isArray(props.carouselData)) {
    console.error("props.carouselData is not an array:", props.carouselData);
    return null;
  }

  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Loop through slides infinitely
    speed: 500, // Speed of slide transition (in ms)
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-rotation
    autoplaySpeed: 5000, // Set auto-rotation speed to 5 seconds (5000ms)
    pauseOnHover: true, // Pause rotation when mouse hovers over carousel
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ padding: 0, height: "100vh", overflow: "hidden" }}
    >
      <Slider {...settings}>
        {props.carouselData.map((item, index) => (
          <Box key={index} sx={{ position: "relative", height: "100vh" }}>
            <Box
              sx={{
                height: "100vh", // Full height of the viewport
                width: "100%", // Full width of the viewport
                backgroundImage: `url(${item.image})`, // Background image applied to each slide
                backgroundSize: "cover", // Ensure the image covers the entire slide
                backgroundPosition: "center", // Center the image
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "15%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "Right",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", marginBottom: 2 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="h6">{item.description}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default BgImageSpread;
