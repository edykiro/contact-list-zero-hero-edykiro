import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";

export const HomeView = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
};
