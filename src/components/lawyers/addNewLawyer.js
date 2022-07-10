import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddNewLawyerForm = (props) => {
  const [fullName, setFullName] = useState();
  const [hourlyRate, setHourlyRate] = useState();
  const [speciality, setSpeciality] = useState();

  // const LAWYER_CREATE_URL_MOCKAPI = 'https://62c752702b03e73a58e37b4a.mockapi.io/api/v1/lawyers';
  const LAWYER_CREATE_URL_RESTDB =
    "https://lawyers-bf0c.restdb.io/rest/lawyers";

  const handleLawyerSubmit = (event) => {
    event.preventDefault();
    fetch(LAWYER_CREATE_URL_RESTDB, {
      mode: "cors",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-apikey": "62c9f84a03ab3e0c7b0cf1bd",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        fullName: fullName,
        hourlyRate: hourlyRate,
        speciality: speciality,
        totalCasesTaken: 0,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        props.handleClose();
        props.setLoading(true);
        props.getLatestLawyerData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Form onSubmit={handleLawyerSubmit}>
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
          <Form.Label> Enter your hourly rate </Form.Label>
          <Form.Control
            type="string"
            placeholder="Enter your Hourly rate"
            required
            onChange={(e) => setHourlyRate(e.target.value)}
          />
        </Form.Group>
        <Form.Group style={{ marginBottom: "20px" }}>
          <Form.Label> Enter your specialization </Form.Label>
          <Form.Control
            onChange={(e) => setSpeciality(e.target.value)}
            type="string"
            placeholder="Enter your specialization"
            required
          />
        </Form.Group>
        <Button type="submit">Save changes</Button>
        <Button type="button" onClick={props.handleClose}>
          Close
        </Button>
      </Form>
    </>
  );
};

export default AddNewLawyerForm;
