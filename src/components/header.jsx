import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <dev className="row">
        <div className="w100" style={{ position: "relative" }}>
          <p className="hiding-text">Groceries Delivered in 90 Minute</p>
          <div>
            <p className="hiding1-text">
              Get your healthy foods & snacks delivered at your doorsteps all
              day everyday
            </p>
          </div>
          <div className=" d-flex col-6">
            <input
              type="text"
              className="form-control input1-filed"
              placeholder="Search your  products from here"
            />
            <div>
              <span className="span-grocery">Grocery</span>
            </div>
            <div>
              <button className="btn btn-primary  btn-grocery">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 14 14"
                >
                  <path
                    d="M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z"
                    transform="translate(-0.984)"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/agri.jpg"
            alt="background"
            width="100%"
            height="700px"
          ></img>
        </div>
      </dev>
    );
  }
}

export default Header;
