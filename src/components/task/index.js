import React from "react";
import { connect } from "react-redux";
import Edit from "./edit";
import Delete from "./delete";
let style = {
  margin: "8px"
};

class Task extends React.Component {
  render() {
    // console.log("task", this.props);
    return (
      <div className="row" style={style}>
        <div className="col-lg-2">
          <h4>{this.props.todo_item.title}</h4>
        </div>
        <div className="col-lg-2">
          <h4>{this.props.todo_item.description}</h4>
        </div>
        <div className="col-lg-2">
          <h4>{this.props.todo_item.createdon}</h4>
        </div>
        <div className="col-lg-2">
          <h4>{this.props.todo_item.modifiedon}</h4>
        </div>
        <Edit todo_item={this.props.todo_item} />
        <Delete todo_item={this.props.todo_item} />
      </div>
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
