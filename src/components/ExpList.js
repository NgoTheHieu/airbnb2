import React, { useState, useEffect } from 'react'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { Container, Row } from 'react-bootstrap';

const ExpList = () => {
    const [exp, setExp] = useState([])
    const url = 'http://localhost:5000/exp'
    useEffect(()=> {
        async function fetchData(){
            const data = await fetch(url)
            const expData = await data.json()
            setExp(expData)
        };
        fetchData();
    },[])
  return (
        <div>
            <Container>
                <Row>
            {exp.map((e)=> (
                <Experience {...e} />
            ))}
                </Row>
            </Container>
        </div>
    )
};

const Experience = ({
    title,
    pictureUrl, 
    country, 
    price, 
    duration
}) => (

    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} height="448" width="336" />
            <Card.Body>
                <Card.Title><h2>{title}</h2></Card.Title>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text> */}
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{country}</ListGroupItem>
                <ListGroupItem>Starting from ${price}</ListGroupItem>
                <ListGroupItem>{duration} hour(s)</ListGroupItem>
            </ListGroup>
        </Card>
    </div>

)

export default ExpList
