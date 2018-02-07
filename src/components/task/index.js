import React from "react";
import { connect } from "react-redux";
import Edit from "./edit";
import Delete from "./delete";
import { Row, Col } from "react-bootstrap";

let style = {
  margin: "8px"
};

class Task extends React.Component {
  render() {
    // console.log("task", this.props);
    return (
      <Row style={style}>
        <Col lg={2}>
          <h4>{this.props.todo_item.title}</h4>
        </Col>
        <Col lg={2}>
          <h4>{this.props.todo_item.description}</h4>
        </Col>
        <Col lg={2}>
          <h4>{this.props.todo_item.createdon}</h4>
        </Col>
        <Col lg={2}>
          <h4>{this.props.todo_item.modifiedon}</h4>
        </Col>
        <Edit todo_item={this.props.todo_item} />
        <Delete todo_item={this.props.todo_item} />
      </Row>
    );
  }
}

export default connect(
  () => {
    return {};
  },
  () => {
    return {};
  }
)(Task);
