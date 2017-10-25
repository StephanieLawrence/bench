import React from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  const name = () =>
    <form>
      <FieldGroup
        id="formControlsText"
        type="text"
        label="Enter Your Name"
        placeholder="Enter text"
      />
      </form>
export default name;

