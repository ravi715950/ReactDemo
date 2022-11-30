import React from "react";
import logo from "./img/logo1.png";
import logo1 from "./img/info-after.png";

function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 d-none d-lg-block border-1">
            <a
              href="index.html"
              className="navbar-brand d-flex align-items-center justify-content-center"
            >
              <img className="logo" src={logo} alt="img" />
            </a>
          </div>
          <div className="col-lg-9">
            <div className="row bg-white border-2 d-none d-lg-flex">
              <div className="col-lg-7 text-left">
                <div className="h-100 d-inline-flex align-items-center py-2 px-3">
                  <small>halstein@example.com</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                  <small>+99 4 11 72 1270</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                  <small>Mon-Fri 9am-5pm</small>
                </div>
              </div>
              <li className="nav-item dropdown col-lg-2">
                <a
                  className="nav-link dropdown-toggle h-100 d-inline-flex align-items-center py-2 px-3"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      French
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Russian
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hindi
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
              <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary text-uppercase">
                  <img src="/img/logo.png" alt="img" />
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto p-4">
                  <a href="#" className="nav-item nav-link px-4">
                    HOME
                  </a>
                  <a href="#" className="nav-item nav-link px-4 ">
                    PAGES
                  </a>
                  <a href="#" className="nav-item nav-link px-4">
                    PORTFOLIO
                  </a>
                  <a href="#" className="nav-item nav-link px-4">
                    SHOP
                  </a>
                </div>
                <a href="" className="infologo mr-3 d-none d-lg-block ">
                  <img src={logo1} alt="" />
                </a>
                
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
