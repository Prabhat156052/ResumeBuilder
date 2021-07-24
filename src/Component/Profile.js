import React, { useState, useEffect } from 'react';

import {Container,Row,Col,Form,FormGroup ,Input,Label,Button} from 'reactstrap';


const getDatafromLS=()=>{
  const data = localStorage.getItem('users');
  if(data){
    console.log(JSON.parse(data));
    return JSON.parse(data);
  }
  else{
    return []
  }
}


const Profile = () => { 
  const inputstyle={border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'};

  const [users, setusers]=useState(getDatafromLS());

  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [mobile, setMobile]=useState("");
  const [district, setDistrict]=useState("");
  const [state, setState]=useState("");
  const [country, setCountry]=useState("");
  const [objective,setObjective]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let user={
      name,
      email,
      mobile,
      district,
      state,
      country,
      objective
    }
    setusers([...users,user]);
    setName("");
    setEmail("");
    setMobile("");
    setDistrict("");
    setState("");
    setCountry("");
    setObjective("");
  }
   
  useEffect(()=>{
    localStorage.removeItem("users");
    localStorage.setItem('users',JSON.stringify(users));
  },[users])
    return (
        <div className="profile" >
          <div style={{backgroundColor:"whitesmoke",marginLeft:'30px',width:'100%',textAlign:'left'}}>
          <h4 style={{margin:'10px'}}>Basic Information</h4>
           <Form onSubmit={handleSubmit}>
           <Container >
           <Row style={{marginTop:'5px'}}>
           
            <Col md="9">
            <FormGroup>
            <Input style={inputstyle}
                                           type="text" 
                                           name="name" 
                                           id="name"
                                           placeholder="Name"
                                           value={name}
                                          onChange={(e)=>setName(e.target.value)}
                                           required />
            </FormGroup>
            </Col>
           </Row>
           <Row>
            <Col md="4">
            <FormGroup>
            <Input style={inputstyle}
                                           type="text" 
                                           name="email" 
                                           id="email"
                                           placeholder="email"
                                          value={email}
                                          onChange={(e)=>setEmail(e.target.value)}
                                           required />
            </FormGroup>
            </Col>
            <Col md="4">
            <FormGroup>
            <Input style={inputstyle}
                                           type="text" 
                                           name="mobile" 
                                           id="mobile"
                                           placeholder="mobile number"
                                         value={mobile}
                                          onChange={(e)=>setMobile(e.target.value)}
                                           required />
             </FormGroup>
            </Col>
           </Row>
           <Row>
           <Col md="3">
           <FormGroup>
           <Input style={inputstyle}
                                          type="text" 
                                          name="district" 
                                          id="district"
                                          placeholder=" your district name"
                                         value={district}
                                         onChange={(e)=>setDistrict(e.target.value)}
                                          required />
          </FormGroup>
           </Col>
           <Col md="3">
           <FormGroup>
           <Input style={inputstyle}
                                          type="text" 
                                          name="state" 
                                          id="state"
                                          placeholder="your state name"
                                          value={state}
                                         onChange={(e)=>setState(e.target.value)}
                                          required />
          </FormGroup>
           </Col>
           <Col md="3">
           <FormGroup>
           <Input style={inputstyle}
                                          type="text" 
                                          name="country" 
                                          id="country"
                                          placeholder="your country name"
                                         value={country}
                                         onChange={(e)=>setCountry(e.target.value)}
                                          required />
           </FormGroup>
           </Col>
           </Row>


           <Row>
                <Col md="8">
                <FormGroup>
                      <Input style={inputstyle}
                      type="textarea"
                      name="objective"
                      id="objective"
                      placeholder="enter your career objective"
                      value={objective}
                      onChange={(e)=>setObjective(e.target.value)}
                      required
                      />
                 </FormGroup>

                </Col>
           </Row>
           <Row>
                <Col md="3">
                <FormGroup>
                           <Button className="button" color="primary" >Save</Button>
                </FormGroup>
                </Col>
           </Row>
           
           </Container>
           </Form>
          </div>    
        </div>
    )
  }
  export default Profile;
  