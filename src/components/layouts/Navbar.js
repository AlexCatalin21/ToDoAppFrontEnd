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
                <h4 className="col-md-11" style={textStyle}>Welcome, User!</h4>
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

