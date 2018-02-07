import React, { Component } from "react";
import Header from "./components/header";
import TaskBar from "./components/taskbar";
import TaskList from "./components/tasklist";
import { Grid, Row, Col } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Header />
        <br />
        <Row>
          <Col lg={1} />
          <Col lg={10}>
            <TaskBar />
            <br />
            <br />
            <TaskList />
          </Col>
          <Col lg={1} />
        </Row>
      </Grid>
    );
  }
}

export default App;
