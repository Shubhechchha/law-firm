import React, {useState, useEffect} from 'react';
import {Row, Col}  from "react-bootstrap";
import LawyerItem from "./lawyerItem";

const LawyerRow = () => {
    const[lawyerData, fetchLawyerData] = useState([]);

    const getData = () => {
        fetch('https://62c752702b03e73a58e37b4a.mockapi.io/api/v1/lawyers')
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            fetchLawyerData(res)
        })
    }

    useEffect(() => {
        getData()
    }, [])

return (
    <Row xs={1} md={3} className="g-4">
        {lawyerData.map ( (lawyer) => (
            <Col key={lawyer.id}>
                <LawyerItem
                    key={lawyer.id} 
                    id={lawyer.id} 
                    fullName ={lawyer.fullName}
                    hourlyRate ={lawyer.houryRate}
                    speciality = {lawyer.speciality}
                    totalCapacity = {lawyer.totalCapacity}
                    totalCaseTaken = {lawyer.totalCaseTaken}
                    image={lawyer.avatar} 
                    />
            </Col> 
        ))}
    </Row>
)
}

export default LawyerRow;