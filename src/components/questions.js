import React from 'react';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

const questions = () =>
<div className = "question">
    <FormGroup controlId="LineOfService">
    <ControlLabel>What is your Line Of Service?</ControlLabel>
    <FormControl componentClass="select" placeholder="select">
        <option value="SAE">SA & E</option>
        <option value="BA">BA & A</option>
        <option value="PM">PM</option>
        <option value="IM">IM</option>
    </FormControl>
</FormGroup>
    <FormGroup controlId="LengthOfStay">
        <ControlLabel>How long will you be staying?</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
            <option value="lessOneWeek"> Less than 1 week</option>
            <option value="oneToTwo">1 to 2 weeks</option>
            <option value="threeToFour">3 to 4 weeks</option>
            <option value="oneMonth">1 month </option>
            <option value="dontKnow">Don't know</option>
        </FormControl>
    </FormGroup>
    <FormGroup controlId="LaptopAvailability">
    <ControlLabel>Do you have a laptop?</ControlLabel>
    <FormControl componentClass="select" placeholder="select">
        <option value="yes">Yes</option>
        <option value="no">No</option>
    </FormControl>
</FormGroup>
</div>


export default questions;