import { Link, useNavigate } from "react-router-dom";
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

  console.log(
    selectedUser,
    selectedContactId,
    userFullName,
    userEmail,
    userPhone,
    userAddress
  );

  return (
    <>
      <div className=" d-flex align-items-center justify-content-center bg-white mt-4">
        <div
          className="card shadow-sm"
          style={{ maxWidth: "420px", width: "100%" }}
        >
          <div className="card-body p-4">
            <h2 className="mb-4">Edit Contact</h2>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                onChange={({ target }) => setUserFullName(target.value)}
                value={userFullName}
                className="form-control"
                placeholder="Enter full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                onChange={({ target }) => setUserPhone(target.value)}
                value={userPhone}
                type="tel"
                className="form-control"
                placeholder="Enter phone"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={({ target }) => setUserEmail(target.value)}
                value={userEmail}
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Address</label>
              <input
                onChange={({ target }) => setUserAddress(target.value)}
                value={userAddress}
                className="form-control"
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
                className="btn btn-success"
              >
                {" "}
                <Link to="/contacts">Edit contact</Link>
              </button>

              <button className="btn btn-success">
                {" "}
                <Link to="/">Or get back to contacts</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
