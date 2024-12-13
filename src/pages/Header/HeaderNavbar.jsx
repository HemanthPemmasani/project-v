import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const HeaderNavbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 20,
        right: 100,
        zIndex: 1,
        borderRadius: "50%  ",
        width: "50%",
        backgroundColor: "rgba(71, 183, 74)",
      }}
    >
      <Toolbar
        style={{
          backgroundColor: "inherit",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NavLink style={{ color: "white" }} to="/">
          Home
        </NavLink>
        <NavLink style={{ color: "white" }} to="/main/AboutUs">
          About US
        </NavLink>
        <NavLink style={{ color: "white" }} to="/main/Careers">
          Careers
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavbar;
