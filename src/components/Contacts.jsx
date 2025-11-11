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
  const [currentUserAgenda, setCurrentUserAgenda] = useState([]);
  const [userInputValue, setUserInputValue] = useState("");
  const { selectedUser, setSelectedUser } = useApp();
  const {selectedContactId, setSelectedContactId} = useApp();

  useEffect(() => {
    refreshAllAgendas();
  }, []);

  const refreshAllAgendas = async () => {
    const fetchData = await getAllAgendas();
    setAllAgendas(fetchData);
  };

  const handleChange = async (event) => {
    const agendaData = await getSingleContactAgenda(event.target.value);
    setCurrentUserAgenda(agendaData);
    console.log(agendaData);
    setSelectedUser(event.target.value);
  };

  const deleteUser = async (userName) => {
    await deleteUserAgenda(userName);
    console.log(userName);
    refreshAllAgendas();
  };

  const addUser = async (userName) => {
    await createNewAgenda(userName);
    setUserInputValue("");
    refreshAllAgendas();
  };

  const deleteUserContact = async (userName, contactID) => {
    await deleteContactForUser(userName, contactID);
    const agenda = await getSingleContactAgenda(userName);
    console.log(agenda);
    setCurrentUserAgenda(agenda);
  };

  const editUserContact = async (user, id) => {

    setSelectedContactId(id);
    console.log(user);
  };

  console.log(selectedUser);
  console.log(currentUserAgenda)

  return (
    <>
      <div className="d-flex ms-3 my-3">
        <select
          onChange={handleChange}
          className="form-select form-select-lg"
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
          onClick={() => {
            deleteUser(selectedUser);
          }}
          className="mx-1 border rounded-3"
        >
          Delete
        </button>
        <input
          onChange={({ target }) => setUserInputValue(target.value)}
          value={userInputValue}
          className="border rounded-3"
        ></input>
        <button
          onClick={() => {
            addUser(userInputValue);
          }}
          className="mx-1 border rounded-3"
        >
          Añadir usuario
        </button>
      </div>
      <div>
        {currentUserAgenda.map((currentUserAgenda) => (
          <div
            className="border rounded-5 d-flex my-2 justify-content-between container"
            id={currentUserAgenda.id}
          >
            <div className="d-flex">
              <div>
                <h1 className="mx-5 my-5">F1</h1>
              </div>
              <div className="my-3">
                <p>{currentUserAgenda.name}</p>
                <p>{currentUserAgenda.address}</p>
                <p>+34 {currentUserAgenda.phone}</p>
                <p>Email: {currentUserAgenda.email}</p>
              </div>
            </div>
            <div className="justify-content-end">
              <button
                onClick={() => {
                  editUserContact(selectedUser, currentUserAgenda.id);
                }}
              >
                <Link
                  className="my-2 fa-solid fa-pen-to-square"
                  to="/editcontact"
                ></Link>
              </button>
              <button
                onClick={() => {
                  deleteUserContact(selectedUser, currentUserAgenda.id);
                }}
                className="my-2 mx-2 fa-solid fa-trash"
              ></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
