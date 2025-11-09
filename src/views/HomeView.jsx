import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const HomeView = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar/>
      <div>
        <h1>I am the home</h1>
      </div>
    </>
  );
};
