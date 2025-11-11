import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../contexts/AppCtx";
import { useEffect, useState } from "react";
import { createContactForUser } from "../services/contactServices";

export const AddNewContact = () => {
  const navigate = useNavigate();
  const { selectedUser, setSelectedUser } = useApp();
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const createContactForUserFunction = async (
    selectedUser,
    userFullName,
    userEmail,
    userPhone,
    userAddress
  ) => {
    const fetchData = await createContactForUser(
      selectedUser,
      userFullName,
      userEmail,
      userPhone,
      userAddress
    );
    console.log(fetchData);
  };
  console.log(selectedUser);

  return (
    <>
<div className="d-flex align-items-center justify-content-center bg-light min-vh-100">
  <div
    className="card shadow border-0"
    style={{ maxWidth: '420px', width: '100%', borderRadius: '1rem' }}
  >
    <div className="card-body p-4">
      <h4 className="mb-4 text-primary fw-semibold">Add a new contact</h4>

      <div className="mb-3">
        <label className="form-label text-secondary small fw-500">Full Name</label>
        <input
          onChange={({ target }) => setUserFullName(target.value)}
          value={userFullName}
          className="form-control bg-white border-secondary-subtle shadow-sm"
          placeholder="Enter full name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-secondary small fw-500">Email</label>
        <input
          onChange={({ target }) => setUserEmail(target.value)}
          value={userEmail}
          type="email"
          className="form-control bg-white border-secondary-subtle shadow-sm"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label className="form-label text-secondary small fw-500">Phone</label>
        <input
          onChange={({ target }) => setUserPhone(target.value)}
          value={userPhone}
          type="tel"
          className="form-control bg-white border-secondary-subtle shadow-sm"
          placeholder="Enter phone"
        />
      </div>

      <div className="mb-4">
        <label className="form-label text-secondary small fw-500">Address</label>
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
            createContactForUserFunction(
              selectedUser,
              userFullName,
              userEmail,
              userPhone,
              userAddress
            )
          }
          className="btn btn-primary flex-fill shadow-sm"
        >
          <Link to="/contacts" className="text-white text-decoration-none">Save</Link>
        </button>

        <button className="btn btn-outline-secondary flex-fill shadow-sm">
          <Link to="/" className="text-decoration-none">Back to contacts</Link>
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
};
