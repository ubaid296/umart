import React, { Component } from "react";

class NavBar extends Component {
  // state = {  }
  render() {
    return (
      <nav className="navbar navbar-lg">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-2">
            <a className="color-primary nav-logo" href="#">
              <span style={{ color: "#000000" }}>U</span>Mart
            </a>
          </div>
          <div className=" d-flex col-5">
            <input
              type="text"
              className="form-control input-filed"
              placeholder="Search products"
            />
          </div>
          <div className="col">
            <button className="btn btn-primary btn-join float-right">
              Join
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
