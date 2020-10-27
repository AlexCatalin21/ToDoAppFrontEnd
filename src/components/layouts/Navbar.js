import React from "react";

export default function NavbarLayout() {
  return (
    <header className="main_menu home_menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                {" "}
                <h3>LOGO</h3>
              </a>
              <div
                className="collapse navbar-collapse main-menu-item"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home Boards
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      Free Time Boards
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/worldMap">
                      Work Boards
                    </a>
                  </li>
                </ul>
                <h4 className="col-md-8" style={textStyle}>Welcome, User!</h4>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

const textStyle={
    textAlign:"right"
}

