import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import { Col, Button } from "react-bootstrap";

class Delete extends React.Component {
  render() {
    return (
      <Col lg={2}>
        <Button
          type="submit"
          className="btn btn-danger"
          onClick={() =>
            this.props.deleteTask(
              this.props.todo_item.title,
              this.props.todo_item.id
            )
          }
        >
          Delete
        </Button>
      </Col>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTask: actions.deleteTask }, dispatch);
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(Delete);
