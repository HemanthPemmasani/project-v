import React from "react";
import BgImageSpread from "../../components/bgImageSpread";
import HeaderNavbar from "../Header/HeaderNavbar";

const Home = () => {
  const carouselData = [
    {
      image: "/images/bg_img_1.jpg",
      title: "Title 1",
      description: "This is the description for image 1.",
    },
    {
      image: "/images/bg_img_2.jpg",
      title: "Title 2",
      description: "This is the description for image 2.",
    },
    {
      image: "/images/bg_img_3.jpg",
      title: "Title 3",
      description: "This is the description for image 3.",
    },
  ];

  return (
    <>
      <HeaderNavbar />
      <BgImageSpread carouselData={carouselData} />
    </>
  );
};

export default Home;
