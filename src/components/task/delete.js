import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "../../actions";

class Delete extends React.Component {
  render() {
    return (
      <div className="col-lg-2">
        <button
          className="btn btn-danger"
          onClick={() =>
            this.props.deleteTask(
              this.props.todo_item.title,
              this.props.todo_item.id
            )
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTask: actions.deleteTask }, dispatch);
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(Delete);
