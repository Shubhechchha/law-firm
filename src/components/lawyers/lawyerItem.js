import {Card, Button} from "react-bootstrap";
import classes from "./lawyerItem.module.css"
import ClientModal from '../Modals/clientModal';
import { useState } from "react";



const LawyerItem = (props) => {

    const[show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.image} alt={props.fullName}/>
                <Card.Body>
                    <Card.Title>{props.fullName}</Card.Title>
                    <Card.Text>{props.hourlyRate}</Card.Text>
                    <Card.Text>{props.speciality}</Card.Text>
                    <Card.Text>{props.totalCaseCapacity}</Card.Text>
                    <Card.Text>{props.totalCaseTaken}</Card.Text>
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