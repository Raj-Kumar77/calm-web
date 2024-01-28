import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const [user, setUser] = useAuth();
  
  const logoutHandler = () =>{
    setUser({
      ...user,
      user: null,
      token: ''
    })
    localStorage.removeItem('userInfo')
    toast.success('Logut successful')
  }
  return (
    <div id="header-bg">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navBar">
        <div className="container">
          <Link className="" to="#">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*b4ZHbSsBVwTAos2uc1sTeA.png"
              className="logo"
              alt=""
              style={{ width: "8rem" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center"
              style={{ flex: "1" }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link nav-linkk active"
                  aria-current="page"
                  to="#"
                >
                  Stress
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkk" to="#">
                  Stress & Anxiety
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkk" to="#">
                  Mindfulness
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkk" to="#">
                  Calm Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-linkk" to="#">
                  Calm Health
                </Link>
              </li>
              {!user?.user ? (
                <li className="nav-item">
                  <Link className="nav-link nav-linkk" to="/sign-in">
                    Login
                  </Link>
                </li>
              ) : (
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                      alt=""
                      style={{ width: "2.2rem", borderRadius: "50%" }}
                    />
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        {user?.user?.email}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#" onClick={logoutHandler}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>

          <Button className="free-btn" variant="light">
            <Link to='/try-free' style={{textDecoration:'none'}}>Try Calm For Free</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
