import React, { useState,useEffect } from 'react'
import {
         Container,
         Row,
         Col,
         Form,
         FormGroup,
         Label,
         Button,
         Input
       } from 'reactstrap';

       const getDatafromLS=()=>{
        const data = localStorage.getItem('educations');
        if(data){
          console.log(JSON.parse(data));
          return JSON.parse(data);
        }
        else{
          return []
        }
      }

export default function Education()  {
   
  const [educations, setEducation]=useState(getDatafromLS());

    const [inputList, setInputList] = useState([{ degree: "", batch: "",school:"" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };

    const handleAddClick = () => {
        setInputList([...inputList, { degree: "", batch: "",school:"" }]);
      };

      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };

     const handleSubmit = e => {
        e.preventDefault();

        setEducation([...educations,inputList]);
        
    }

    useEffect(()=>{
      localStorage.setItem('educations',JSON.stringify(educations));
    },[educations])
      
    const inputstyle={border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'};
    
        return (
            <div>
            <div style={{backgroundColor:"whitesmoke",marginLeft:'30px',width:'auto',textAlign:'left'}}>
            <h4 style={{margin:'10px'}}>Educational Information</h4>
            
                    
            <Form onSubmit={handleSubmit}> 
            <Container fluid>
            {inputList.map((x, i) => {
                return(
                    <div>
                  <Row>
                       <Col md="6">
                             <FormGroup>
                                        <Label  for="degree">Degree</Label>
                                        <Input style={inputstyle} type="text" name="degree" id="degree" placeholder="MCA" required  
                                        value={x.degree}
                                        onChange={e => handleInputChange(e, i)}
                                        />
                             </FormGroup>
                       </Col>
                       <Col md="6">
                       <FormGroup>
                                  <Label for="batch">Batch</Label>
                                  <Input style={inputstyle} type="text" name="batch" id="batch" placeholder="2015-18" required 
                                  value={x.batch}
                                  onChange={e => handleInputChange(e, i)}
                                  />
                       </FormGroup>
                 </Col>
                  </Row>
                  <Row>
                       <Col md="6">
                             <FormGroup>
                                        <Label  for="school">School</Label>
                                        <Input style={inputstyle} type="text" name="school" id="school" placeholder="University of Allhabad" required 
                                        value={x.school}
                                        onChange={e => handleInputChange(e, i)}
                                        />
                             </FormGroup>
                       </Col>
                       <Col md="3">
                       <FormGroup>

                                   {inputList.length - 1 === i &&  <Label>Add section</Label>}
                                  {inputList.length - 1 === i && 
                                    <Button onClick={handleAddClick}>Add</Button>}
                       </FormGroup>
                       </Col>
                       <Col md="3">
                       <FormGroup>
                       {inputList.length !== 1 &&
                                   <Label>Remove section</Label>}
                                   {inputList.length !== 1 &&
                                  <Button onClick={() => handleRemoveClick(i)}>Remove</Button>}
                       </FormGroup>
                       </Col>
                  </Row>
                  </div>
                  );
                })}
                  <Row>
                  <Col md="6">
                  <FormGroup>
                              
                             <Button className="button" color="primary">Save</Button>
                  </FormGroup>
                  </Col>
                  </Row>
                  </Container>
            </Form>
            
           
        
        </div>
        </div>
        );
    
}
