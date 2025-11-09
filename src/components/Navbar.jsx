import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="mx-2">
                Go to Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contacts" className="mx-2">
                Go to contact list
              </Link>
            </li>
            <li>
              <Link to="/newcontact" className="mx-2">
                Create new contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
