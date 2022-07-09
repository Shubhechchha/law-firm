import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ClientCaseRegistration(props) {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [caseDescription, setCaseDescription] = useState();

  const CASE_REGISTRATION_URL = 'https://lawyers-bf0c.restdb.io/rest/cases';

  const handleClientSubmit = (event) => {
    event.preventDefault();
    fetch(CASE_REGISTRATION_URL, {
      mode: 'cors',
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-apikey": "62c9f84a03ab3e0c7b0cf1bd",
        "cache-control": "no-cache"
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNum,
        caseDescription: caseDescription,
        lawyerID: props.lawyerID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Form onSubmit={handleClientSubmit}>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your Fullname </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Fullname"
            required
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your email addresss </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your phone number </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone number"
            onChange={(e) => setPhoneNum(e.target.value)}
          />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your case description </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your case description"
            onChange={(e) => setCaseDescription(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Save changes</Button>
        <Button type="button" onClick={props.handleClose}>
          Close
        </Button>
      </Form>
    </>
  );
}

export default ClientCaseRegistration;
