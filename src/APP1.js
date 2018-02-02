import React, { Component } from "react";
import Header from "./components/header";
import TaskBar from "./components/taskbar";
import TaskList from "./components/tasklist";

class App1 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row page-header bg-primary">
          <div className="col">
            <Header />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-10">
            <TaskBar />
            <br />
            <br />
            <TaskList />
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    );
  }
}

export default App1;
