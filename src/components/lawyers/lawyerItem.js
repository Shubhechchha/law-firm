import {Card, Button} from "react-bootstrap";
import classes from "./lawyerItem.module.css"
import ClientModal from '../Modals/clientModal';
import { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton'

const LawyerItem = (props) => {

    const[show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const LAWYER_DELETE_URL_RESTDB = "https://lawyers-bf0c.restdb.io/rest/lawyers";
    const LAWYER_DELETE_URL_WITH_ID = LAWYER_DELETE_URL_RESTDB + "/" + props.id;

    const handleLawyerDelete = (event) => {
        fetch(LAWYER_DELETE_URL_WITH_ID, {
            mode: 'cors',
            method: 'DELETE',
            headers: {
              "content-type": "application/json",
              "x-apikey": "62c9f84a03ab3e0c7b0cf1bd",
              "cache-control": "no-cache"
            },   
        }).then(data => {
            console.log('Success:', data);
            props.setLoading(true);
            props.getLatestLawyerData();
          }).catch((error) => {
            console.error('Error:', error);
          });
         
    }

    return (
        <>
            <Card>
                <Card.Header><CloseButton onClick={handleLawyerDelete}/></Card.Header>
                <Card.Img variant="top" src={props.image} alt={props.fullName}/>
                <Card.Body>
                    <Card.Title>{props.fullName}</Card.Title>
                    <Card.Text>Hourly rate: {props.hourlyRate}</Card.Text>
                    <Card.Text>Specialization: {props.speciality}</Card.Text>
                    <Card.Text>Cases taken: {props.totalCasesTaken}</Card.Text>
                    <Button
                        variant="primary"
                        className ={classes.custombtn}
                        onClick={handleShow}>
                        BOOK
                    </Button>
                    <ClientModal show={show} handleClose={handleClose} lawyerID={props.id} />
                </Card.Body>
                
            </Card>
        </>
    )
}


export default LawyerItem;