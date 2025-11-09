import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { getAllAgendas } from "../services/agendaServices";
import { useEffect, useState } from "react";
import { Contacts } from "../components/Contacts";

export const ContactsView = () => {

  return (
    <>
    <Navbar/>
    <Contacts/>
    </>
  );
};
