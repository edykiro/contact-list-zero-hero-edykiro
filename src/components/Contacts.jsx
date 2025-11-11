import { getAllAgendas } from "../services/agendaServices";
import { useEffect, useState } from "react";
import {
  getSingleContactAgenda,
  deleteUserAgenda,
  createNewAgenda,
} from "../services/agendaServices";
import { useApp } from "../contexts/AppCtx";
import {
  deleteContactForUser,
  refreshUserContacts,
} from "../services/contactServices";
import { Link, useNavigate } from "react-router-dom";

export const Contacts = () => {
  const [allAgendas, setAllAgendas] = useState([]);
  const [userContacts, setUserContacts] = useState([]);
  const [userInputValue, setUserInputValue] = useState("");
  const { selectedUser, setSelectedUser } = useApp();
  const { selectedContactId, setSelectedContactId } = useApp();

  const navigate = useNavigate();

  useEffect(() => {
    refreshAllAgendas();
  }, []);

  const refreshAllAgendas = async () => {
    const fetchData = await getAllAgendas();
    setAllAgendas(fetchData);
  };

  const handleChange = async (event) => {
    const agendaData = await getSingleContactAgenda(event.target.value);
    setUserContacts(agendaData);
    setSelectedUser(event.target.value);
  };

  const deleteUser = async (userName) => {
    await deleteUserAgenda(userName);
    refreshAllAgendas();
  };

  const addUser = async (userName) => {
    await createNewAgenda(userName);
    setUserInputValue("");
    refreshAllAgendas();
  };

  useEffect(() => {
    console.log(userContacts);
  }, [userContacts]);

  const deleteUserContact = async (userName, contactID) => {
    await deleteContactForUser(userName, contactID);
    const agenda = await getSingleContactAgenda(userName);
    setUserContacts(agenda);
  };

  const handleEdit = (contact) => {
    navigate("/editcontact", {
      state: { contact },
    });
  };

  const handleContactEdit = async (contact) => {
    setSelectedContactId(contact.id);
    handleEdit(contact);
  };

  return (
    <>
      <div className="bg-light min-vh-100">
        <div className="d-flex justify-content-center">
          <div className="container d-flex justify-content-center mt-4">
            <select
              onChange={handleChange}
              className="form-select form-select-lg shadow-sm w-25"
              style={{ width: "160px" }}
            >
              <option value="" disabled selected>
                Select user
              </option>
              {allAgendas.map((agenda) => (
                <option key={agenda.id} value={agenda.slug}>
                  {agenda.slug}
                </option>
              ))}
            </select>

            <button
              onClick={() => deleteUser(selectedUser)}
              className="btn btn-outline-primary mx-2 shadow-sm"
            >
              Delete
            </button>

            <input
              onChange={({ target }) => setUserInputValue(target.value)}
              value={userInputValue}
              className="form-control shadow-sm w-25"
              placeholder="New user"
            />

            <button
              onClick={() => addUser(userInputValue)}
              className="btn btn-primary ms-2 shadow-sm"
            >
              Añadir usuario
            </button>
          </div>
        </div>

        <div className="px-3 container my-4 p-3">
          {userContacts.map((contact) => (
            <div
              key={contact.id}
              className="card border-0 shadow-sm rounded-5 d-flex flex-row justify-content-between align-items-center my-3 p-3 bg-white"
            >
              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary fw-bold fs-1 mx-4"
                  style={{ width: 80, height: 80 }}
                >
                  F1
                </div>
                <div>
                  <h5 className="mb-1 text-primary">{contact.name}</h5>
                  <p className="mb-0 small text-muted">{contact.address}</p>
                  <p className="mb-0 small text-muted">+34 {contact.phone}</p>
                  <p className="mb-0 small text-muted">
                    Email: {contact.email}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <button
                  onClick={() => handleContactEdit(contact)}
                  className="btn btn-sm btn-outline-secondary mx-1 shadow-sm"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  onClick={() => deleteUserContact(selectedUser, contact.id)}
                  className="btn btn-sm btn-outline-danger mx-1 shadow-sm"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
