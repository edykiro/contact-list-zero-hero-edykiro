import { Link, useNavigate, useLocation } from "react-router-dom";
import { useApp } from "../contexts/AppCtx";
import { useEffect, useState } from "react";
import {
  createContactForUser,
  editContactForUser,
} from "../services/contactServices";

export const EditContact = () => {
  const navigate = useNavigate();
  const { selectedUser, setSelectedUser } = useApp();
  const { selectedContactId, setSelectedContactId } = useApp();

  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const { state } = useLocation(); // undefined if user arrived some other way
  console.log(state.contact.name);
  useEffect(() => {
    setUserFullName(state.contact.name);
    setUserEmail(state.contact.email);
    setUserPhone(state.contact.phone);
    setUserAddress(state.contact.address);
  }, []);

  const editContactFunction = async (
    selectedUser,
    selectedContactId,
    userFullName,
    userPhone,
    userEmail,
    userAddress
  ) => {
    const fetchData = await editContactForUser(
      selectedUser,
      selectedContactId,
      userFullName,
      userPhone,
      userEmail,
      userAddress
    );
    console.log(fetchData);
  };
  console.log(
    "Selected user to edit is " +
      selectedUser +
      " With the contact ID " +
      selectedContactId
  );

  return (
    <>
      <div className="d-flex align-items-center justify-content-center bg-light py-5 min-vh-100">
        <div
          className="card border-0 shadow rounded-4"
          style={{ maxWidth: "420px", width: "100%" }}
        >
          <div className="card-body p-4">
            <h4 className="mb-4 text-primary fw-semibold">Edit Contact</h4>

            <div className="mb-3">
              <label className="form-label text-secondary small fw-500">
                Full Name
              </label>
              <input
                onChange={({ target }) => setUserFullName(target.value)}
                value={userFullName}
                className="form-control bg-white border-secondary-subtle shadow-sm"
                placeholder="Enter full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary small fw-500">
                Phone
              </label>
              <input
                onChange={({ target }) => setUserPhone(target.value)}
                value={userPhone}
                type="tel"
                className="form-control bg-white border-secondary-subtle shadow-sm"
                placeholder="Enter phone"
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-secondary small fw-500">
                Email
              </label>
              <input
                onChange={({ target }) => setUserEmail(target.value)}
                value={userEmail}
                type="email"
                className="form-control bg-white border-secondary-subtle shadow-sm"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-secondary small fw-500">
                Address
              </label>
              <input
                onChange={({ target }) => setUserAddress(target.value)}
                value={userAddress}
                className="form-control bg-white border-secondary-subtle shadow-sm"
                placeholder="Enter address"
              />
            </div>

            <div className="d-flex gap-2">
              <button
                onClick={() =>
                  editContactFunction(
                    selectedUser,
                    selectedContactId,
                    userFullName,
                    userPhone,
                    userEmail,
                    userAddress
                  )
                }
                className="btn btn-primary flex-fill shadow-sm"
              >
                <Link
                  to="/contacts"
                  className="text-white text-decoration-none"
                >
                  Edit contact
                </Link>
              </button>

              <button className="btn btn-outline-secondary flex-fill shadow-sm">
                <Link to="/" className="text-decoration-none">
                  Back to contacts
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
