
import React, {useState} from 'react';
import {Container,Row,Col,Form,FormGroup,Button,Input} from 'reactstrap';
import CartIcon from '../assets/images/contactpageimg.png'
const ContactUs = () => {
    
  const [status, setStatus] = useState("Submit");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { username, email, message } = e.target.elements;
    let details = {
      username: username.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    setUserName("");
    setEmail("");
    setMessage("");
  };
  
          const inputstyle={border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'};
        return(
            <div className="contactcontainer" style={{display:'flex'}}>
            <div   style={{margin:'20px',padding:'40px'}}>
            <Form onSubmit={handleSubmit}>
            <Container fluid>
                       <h2>Contact Us</h2>
                       <Row>
                          <Col md="12">
                          <FormGroup>
                          <Input type="text" 
                           name="username"
                           id="username" 
                           placeholder="Name:*" 
                           required
                           value={username}
                           onChange={(e) => setUserName(e.target.value)}
                           style={inputstyle}
                           />
                       </FormGroup>
                    
                          </Col>
                       </Row>
                       <Row>
                            <Col md="12">
                            <FormGroup>
                            <Input type="email"
                             name="email" 
                             id="email" 
                             placeholder="Email:*" 
                             required
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                            style={inputstyle} 
                            />  
                            </FormGroup>
                            </Col>
                       </Row> 
                          
                  <Row>
                    <Col md="12">
                       <FormGroup>
                       <Input type="textarea" 
                       name="message" 
                       id="message" 
                       placeholder="Message:*"
                        required
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                       style={inputstyle} />
                       </FormGroup>
                   </Col>
                  </Row>
                  <Row>
                     <Col md="12">
                       <FormGroup>     
                        <Button className="button" color="primary"
                            type="submit">Send  
                        </Button> 
                      </FormGroup>
                     </Col>
                  </Row>
                  </Container>
            </Form>
            </div>
            <div>
            <img src={CartIcon} width="100%" height="100%" />
            </div>
            </div>
        );
    
}
export default ContactUs;