import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold text-white" href="#">Navbar</a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-light px-3">Go to Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacts" className="nav-link text-light px-3">Go to contact list</Link>
        </li>
        <li className="nav-item">
          <Link to="/newcontact" className="nav-link text-light px-3">Create new contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};
