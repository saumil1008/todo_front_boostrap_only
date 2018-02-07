import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";
import { Col, Button } from "react-bootstrap";

class Edit extends React.Component {
  render() {
    return (
      <Col lg={2}>
        <Button
          type="submit"
          className="btn btn-warning"
          onClick={() => {
            this.props.edit(this.props.todo_item);
          }}
        >
          Edit
        </Button>
      </Col>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      edit: actions.editTask
    },
    dispatch
  );
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(Edit);
