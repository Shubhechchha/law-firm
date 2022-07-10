import React, { useState, useEffect } from "react";
import classes from "./lawyerForm.module.css";
import { Button } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import LawyerModal from "../Modals/lawyerModal";
import LawyerRow from "./lawyerRow";

function LawyersList(props) {
  const [show, setShow] = useState(false);
  const [lawyerData, fetchLawyerData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const LAWYER_CREATE_URL_RESTDB =
    "https://lawyers-bf0c.restdb.io/rest/lawyers";

  const getData = () => {
    fetch(LAWYER_CREATE_URL_RESTDB, {
      mode: "cors",
      headers: {
        "content-type": "application/json",
        "x-apikey": "62c9f84a03ab3e0c7b0cf1bd",
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        fetchLawyerData(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (isLoading === true) {
    return <TailSpin color="#00BFFF" height={80} width={80} />;
  } else {
    return (
      <>
        <LawyerRow
          lawyerData={lawyerData}
          getLatestLawyerData={getData}
          setLoading={setLoading}
        />
        <Button className={classes.lawyerForm} onClick={handleShow}>
          Add new lawyer
        </Button>
        <LawyerModal
          show={show}
          handleClose={handleClose}
          getLatestLawyerData={getData}
          setLoading={setLoading}
        />
      </>
    );
  }
}

export default LawyersList;
