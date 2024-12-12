import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavbar = () => {
  const headNavbar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#FFF",
    color: "#333",
  };
  return (
    <div style={headNavbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AboutUs">About US</NavLink>
      <NavLink to="/Careers">Careers</NavLink>
    </div>
  );
};

export default HeaderNavbar;
