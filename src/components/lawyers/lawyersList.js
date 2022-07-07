import LawyerItem from "./lawyerItem";
import {Row, Col}  from "react-bootstrap";


function LawyersList() {

    let lawyerData = [
        {
            id: 'c1',
            name : 'Alexa Green',
            image: "/images/AlexaGreen.jpg",
            description: 'This is ABC party.'
        },
        
        {
            id:'c2',
            name : 'Carls Smith',
            image: '/images/CarlSmith.jpg',
            description : 'This is XYZ party.'
        },
        
        {
            id:'c3',
            name : 'Claire Buffay',
            image: '/images/ClaireBuffay.jpg',
            description : 'This is EFG party.'
        },
        
        {
            id:'c4',
            name : 'Hachiko Yang',
            image: '/images/HachikoYang.jpg',
            description : 'This is BGC party.'
        },
        
        {
            id:'c5',
            name : 'Harry Johnson',
            image: '/images/HarryJohnson.jpg',
            description : 'This is HJK party.'
        },
        
        {
            id:'c6',
            name : 'Johny Griffith',
            image: '/images/JohnyGriffith.jpg',
            description : 'This is LMN party.'
        },
        
        {
            id:'c7',
            name : 'Sarah Jolie',
            image: '/images/SarahJolie.jpg',
            description : 'This is OPQ party.'
        },
        
        {
            id:'c8',
            name : 'Tamara Geller',
            image: '/images/TamaraGeller.jpg',
            description : 'This is CVB party.'
        }
        
        ];


    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {lawyerData.map ( (lawyer) => (
                   <Col key={lawyer.id}>
                    <LawyerItem
                      key={lawyer.id} 
                      id={lawyer.id} 
                      image={lawyer.image} 
                      name ={lawyer.name}
                      description = {lawyer.description}
                      />
                   </Col> 
                ))}

            </Row>
        </>
    )
}

export default LawyersList;