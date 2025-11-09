import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { AddNewContact } from "../components/AddNewContact";

export const AddNewContactView = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <AddNewContact />
    </>
  );
};
