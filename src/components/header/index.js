import React from "react";
import { Row, Col, PageHeader } from "react-bootstrap";

export default class Header extends React.Component {
  render() {
    return (
      <Row className="page-header bg-primary">
        <Col>
          <PageHeader className="text-white">
            TO-DO <small>Application</small>
          </PageHeader>
        </Col>
      </Row>
    );
  }
}
