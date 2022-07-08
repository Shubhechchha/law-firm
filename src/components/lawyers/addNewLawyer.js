import React from "react";
import { Form, Button } from "react-bootstrap";


const AddNewLawyerForm = (props) => {

  return (
    <>
      <Form>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your Fullname </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Fullname" required
          />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your hourly rate </Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter your Hourly rate" required
          />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your specialization </Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter your specialization" required
          />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your total case capacity </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your total case capacity" required
          />
        </Form.Group>
        <Button type="submit" >Save changes</Button>
        <Button type="button" onClick={props.handleClose}>Close</Button>
      </Form>
    </>
  );
}

export default AddNewLawyerForm;