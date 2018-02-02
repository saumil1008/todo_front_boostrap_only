import React from "react";
import { connect } from "react-redux";
import Task from "../task";
import actions from "../../actions";
import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux";

class TaskList extends React.Component {
  componentDidMount() {
    console.log("old", this.props);
    this.props.reload();
  }

  render() {
    console.log(this.props.tasks);
    return (
      <div>
        <div className="row text-info">
          <div className="col-lg-2">
            <h3>Title</h3>
          </div>
          <div className="col-lg-2">
            <h3>Desc</h3>
          </div>
          <div className="col-lg-2">
            <h3>Created On</h3>
          </div>
          <div className="col-lg-2">
            <h3>Modified On</h3>
          </div>
          <div className="col-lg-2">
            <h3>Edit</h3>
          </div>
          <div className="col-lg-2">
            <h3>Delete</h3>
          </div>
        </div>
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
