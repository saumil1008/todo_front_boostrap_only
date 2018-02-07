import React from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/redux";
import { Row, Col, Form, FormGroup, Button } from "react-bootstrap";
import { FieldGroup } from "./formelemets";

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
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <FieldGroup
                id="title"
                type="text"
                name="title"
                placeholder="Add todos..."
                label="Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <br />
              <FieldGroup
                id="description"
                type="text"
                name="description"
                placeholder="Add Description..."
                label="Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              <br />
              <Button
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
                type="submit"
              >
                ADD!
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
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
