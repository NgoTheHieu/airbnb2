  import React, {useState} from 'react'
  import {Form, Button} from 'react-bootstrap'
  
  const AddExp = (e) => {
    
    const url = 'http://localhost:5000/exp'

    const [title, setTitle] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    const [country, setcountry] = useState("")
    const [price, setPrice] = useState(0)
    const [duration, setDuration] = useState(0)

    const createExp = async (e) => {
        e.preventDefault();
        const expData = {
            title,
            pictureUrl,
            country,
            price,duration
        }

        const newExp = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expData)
        });
        alert("Experience created")
    }

    return (
        <Form onSubmit={createExp}>
          <Form.Group>
            <Form.Control 
                type="text" 
                placeholder="Title" 
                name="title"
                value={title}
                onChange = {e => setTitle(e.target.value)}
            />
            <br />

            <Form.Control 
                type="text" 
                placeholder="Picture Url" 
                name="pictureUrl"
                value={pictureUrl}
                onChange = {e => setPictureUrl(e.target.value)}
            />
            <br />

            <Form.Control 
                type="text" 
                placeholder="Country" 
                name="country"
                value={country}
                onChange = {e => setcountry(e.target.value)}
            />
            <br />

            <Form.Control 
                type="number" 
                placeholder="Price" 
                name="price"
                value={price}
                onChange = {e => setPrice(e.target.value)}
            />
            <br />

            <Form.Control 
                type="number" 
                placeholder="Duration" 
                name="duration"
                value={duration}
                onChange = {e => setDuration(e.target.value)}
            />
            <br />

            <Button 
                variant="primary" 
                type="submit" 
                value="Create exp"
            >
                Create Experience
            </Button>
          </Form.Group>
        </Form>
      )
  }
  
  export default AddExp
  