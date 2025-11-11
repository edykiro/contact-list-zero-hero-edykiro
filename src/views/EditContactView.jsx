import React from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { EditContact } from "../components/EditContact";

export const EditContactView = () => {
  let { id } = useParams();
  return (
    <>
      <Navbar/>
      <EditContact/>
    </>
  );
};
