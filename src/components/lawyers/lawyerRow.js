import {Row, Col}  from "react-bootstrap";
import LawyerItem from "./lawyerItem";

const LawyerRow = (props) => {
   
return (
    <Row xs={1} md={3} className="g-4">
        {props.lawyerData.map ( (lawyer) => (
            <Col key={lawyer.id}>
                <LawyerItem
                    key={lawyer.id} 
                    id={lawyer.id} 
                    fullName ={lawyer.fullName}
                    hourlyRate ={lawyer.houryRate}
                    speciality = {lawyer.speciality}
                    totalCasesTaken = {lawyer.totalCasesTaken}
                    image={lawyer.avatar} 
                    />
            </Col> 
        ))}
    </Row>
)
}

export default LawyerRow;