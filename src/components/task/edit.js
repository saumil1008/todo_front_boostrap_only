import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";

class Edit extends React.Component {
  render() {
    return (
      <div className="col-lg-2">
        <button
          className="btn btn-warning"
          onClick={() => {
            this.props.edit(this.props.todo_item);
          }}
        >
          Edit
        </button>
      </div>
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
