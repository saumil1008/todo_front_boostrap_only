import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux";

class TaskBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.store.title,
      description: this.props.store.desc
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: this.props.store.title,
      description: this.props.store.desc
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log("taskbar", this.props);
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Add todos..."
                value={this.state.title}
                onChange={this.handleChange}
                ref="task"
              />
              <br />
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Add Description..."
                value={this.state.description}
                onChange={this.handleChange}
                ref="desc"
              />
              <br />
              <button
                className="btn btn-success"
                onClick={() => {
                  if (this.props.store.id) {
                    this.props.updateTask(
                      this.props.store.id,
                      this.state.title,
                      this.state.description,
                      this.props.store.createdon
                    );
                  } else {
                    this.props.addTask(
                      this.props.store.id,
                      this.state.title,
                      this.state.description,
                      this.props.store.createdon,
                      this.props.store.modifiedon
                    );
                  }
                }}
                type="button"
              >
                ADD!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  console.log("store taskbar:", store);
  return {
    store: store.task
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addTask: actions.addTask,
      updateTask: actions.updateTask
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskBar);
