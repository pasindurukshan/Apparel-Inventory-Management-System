import React, { Component } from "react";
import "./Allmain.css";

class mainhome extends Component {
  render() {
    return (
      <div className="container">
        <h2>
          {" "}
          <center>
            {" "}
            <br />
            <h1 class="display-2">Apparel Inventory Management System</h1>
            <br />
          </center>{" "}
        </h2>
        <hr className="hr" />
        <br />

        <div class="row">

          <div class="col-sm-3">
            <div className="card border-light border border-5">
              <div class="card-body bg-dark">

                <div class="card-text">
                  <a className="link" href="/orderDashboard">
                    <i class="fas fa-cart-arrow-down fa-10x"></i>
                  </a> <br /> <br />
                  <h5 className="title"> Order <br /> Management</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-3">
            <div className="card border-light border border-5">
              <div class="card-body bg-dark">
                <div class="card-text">
                  <a className="link" href="/matDash">
                    <i class="fas fa-cut fa-10x"></i>
                  </a><br /> <br />
                  <h5 className="title"> Raw Meterial Stock Management</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="card border-light border border-5">
              <div class="card-body bg-dark">

                <div class="card-text">
                  <a className="link" href="/SHdashboard">
                    <i class="fas fa-globe fa-10x"></i>
                  </a><br /> <br />
                  <h5 className="title"> Import <br /> Management</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="card border-light border border-5">
              <div class="card-body bg-dark">

                <div class="card-text">
                  <a className="link" href="/PMDashboard">
                    <i class="fas fa-cogs fa-10x"></i>
                  </a><br /> <br />
                  <h5 className="title"> Production <br /> Management</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="card border-light border border-5">
              <div class="card-body bg-dark">
                <div class="card-text">
                  <a className="link" href="/qcDash">
                    <i class="fas fa-check fa-10x"></i>
                  </a><br /> <br />
                  <h5 className="title"> Quality <br /> Management</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="card border-light border border-5">
              <div class="card-body bg-dark">

                <div class="card-text">
                  <a className="link" href="/RMDashbord">
                    <i class="fas fa-tshirt fa-10x"></i>
                  </a><br /> <br />
                  <h5 className="title"> Ready Made <br /> Management</h5>
                </div>
              </div>
            </div>
          </div><div class="col-sm-3">
            <div className="card border-light border border-5">
              <div class="card-body bg-dark">

                <div class="card-text">
                  <a className="link" href="/TMSDash">
                    <i class="fas fa-shipping-fast fa-10x"></i>
                  </a><br /> <br />
                  <h5 className="title"> Transport <br /> Management</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="card border-light border border-5">
              <div class="card-body bg-dark">
                <div class="card-text">
                  <a className="link" href="/Accountdashboard">
                    <i class="fas fa-hand-holding-usd fa-10x"></i>
                  </a><br /> <br />
                  <h5 className="title"> Account <br /> Management</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default mainhome;