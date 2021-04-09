import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./Home";
import Employee from "./Employee";
import Navbar from "./Navbar";
import Customer from "./Customer";
import SignUp from "./SignUp";
import Manager from "./Manager";
import ManagerDash from "./ManagerDash";
import StaffPerformance from "./StaffPerformance";

function CAll() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Router>
          <Switch>
            <Route
              path={"/Manager/StaffPerformance"}
              component={StaffPerformance}
            />
            <Route path={"/customer/signUp"} component={SignUp} />
            <Route path={"/customer"} component={Customer} />
            <Route path={"/employee"} component={Employee} />
            <Route path={"/Manager"} component={Manager} />
            <Route path={"/ManagerDash"} component={ManagerDash} />
            {/* <Route path={"/aboutus"} component={AboutUs}/> */}
            <Route path={"/"} component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default CAll;
