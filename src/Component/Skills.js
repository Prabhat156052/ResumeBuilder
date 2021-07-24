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
    const data = localStorage.getItem('skills');
    if(data){
      console.log(JSON.parse(data));
      return JSON.parse(data);
    }
    else{
      return []
    }
  }

  export default function Skills(){
    
    const[skills,setSkill] = useState(getDatafromLS);

    const [inputList, setInputList] = useState([{skills:"" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };

    const handleAddClick = () => {
        setInputList([...inputList, { skills:"" }]);
      };

      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };

     const handleSubmit = e => {
        e.preventDefault();
        let skill={
           inputList
        }
       setSkill([...skills,skill])
    }
    
    useEffect(()=>{
      localStorage.setItem('skills',JSON.stringify(skills));
    },[skills])
    
    const inputstyle={border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'};
    
  
    return (
        <div>
        <div style={{backgroundColor:"whitesmoke",marginLeft:'30px',width:'auto',textAlign:'left'}}>
        <h4 style={{margin:'10px'}}>Technical Skills Information</h4>       
        <Form onSubmit={handleSubmit}> 
        <Container fluid>
        {inputList.map((x, i) => {
            return(
                <div>
              <Row>
                   <Col md="6">
                         <FormGroup>
                                    
                                    <Input style={inputstyle} name="skills" id="skills" placeholder="React JS" required 
                                    value={x.skills}
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
