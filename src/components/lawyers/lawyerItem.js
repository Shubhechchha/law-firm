import {Card, Button} from "react-bootstrap";
import classes from "./lawyerItem.module.css"


const LawyerItem = (props) => {
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
                        className ={classes.custombtn}>
                        VOTE
                    </Button>
                </Card.Body>
                
            </Card>
        </>
    )
}


export default LawyerItem;