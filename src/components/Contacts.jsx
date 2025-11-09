import { getAllAgendas } from "../services/agendaServices";
import { useEffect, useState } from "react";
import { getSingleContactAgenda } from "../services/agendaServices";
import { useApp } from "../contexts/AppCtx";

export const Contacts = () => {
  const [allAgendas, setAllAgendas] = useState([]);
  const [currentUserAgenda, setCurrentUserAgenda] = useState([]);
  const { selectedUser, setSelectedUser } = useApp();

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
    setSelectedUser(event.target.value);
  };
  console.log(selectedUser);
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
        <button className="mx-1 border rounded-3">Delete</button>
        <input className="border rounded-3"></input>
        <button className="mx-1 border rounded-3">Añadir usuario</button>
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
              <button className="my-2 me-4 fa-solid fa-pen-to-square"></button>
              <button className="my-2 mx-2 fa-solid fa-trash"></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
