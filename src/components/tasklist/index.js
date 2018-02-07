import React from "react";
import { connect } from "react-redux";
import Task from "../task";
import actions from "../../actions";
import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux";
import { Row, Col } from "react-bootstrap";

class TaskList extends React.Component {
  componentDidMount() {
    console.log("old", this.props);
    this.props.reload();
  }

  render() {
    console.log(this.props.tasks);
    return (
      <div>
        <Row className="text-info">
          <Col lg={2}>
            <h3>Title</h3>
          </Col>
          <Col lg={2}>
            <h3>Desc</h3>
          </Col>
          <Col lg={2}>
            <h3>Created On</h3>
          </Col>
          <Col lg={2}>
            <h3>Modified On</h3>
          </Col>
          <Col lg={2}>
            <h3>Edit</h3>
          </Col>
          <Col lg={2}>
            <h3>Delete</h3>
          </Col>
        </Row>
        <br />
        {this.props.tasks.map(todo => <Task key={todo.id} todo_item={todo} />)}
      </div>
    );
  }
}

function mapStateToProps(store) {
  console.log("mapStatetoProps", store);
  return {
    tasks: store.task.todo_item
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ reload: actions.reloadTask }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
