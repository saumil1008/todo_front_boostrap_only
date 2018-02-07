import React from "react";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

export const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};
