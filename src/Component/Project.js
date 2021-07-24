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
    const data = localStorage.getItem('projects');
    if(data){
      console.log(JSON.parse(data));
      return JSON.parse(data);
    }
    else{
      return []
    }
  } 

  export default function Project(){
    
    const[projects,setProject] = useState(getDatafromLS);

    const [inputList, setInputList] = useState([{projectname:"",description:"" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };

    const handleAddClick = () => {
        setInputList([...inputList, { projectname:"",description:"" }]);
      };

      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };

     const handleSubmit = e => {
        e.preventDefault();
        console.log(inputList);
        let project={
          inputList
       }
       
      setProject([...projects,inputList])
      
    } 
    useEffect(()=>{
      localStorage.setItem('projects',JSON.stringify(projects));
    },[projects])

    const inputstyle={border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'};
    
  
    return (
        <div style={{width:'210mm'}}>
        <div style={{backgroundColor:"whitesmoke",marginLeft:'30px',width:'auto',textAlign:'left'}}>
        <h4 style={{margin:'10px'}}>Project Information</h4>       
        <Form onSubmit={handleSubmit}> 
        <Container fluid>
        {inputList.map((x, i) => {
            return(
                <div>
                <Row>
                <Col md="6">
                <FormGroup>
                           <Label  for="project">Project</Label>
                           <Input style={inputstyle} type="textarea"
                            name="projectname" 
                            id="projectname" 
                            placeholder="eg.Resume Builder" 
                            required 
                           value={x.projectname}
                           onChange={e => handleInputChange(e, i)}
                           />
                </FormGroup>
                </Col>
                </Row>
                <Row>
                   <Col md="6">
                         <FormGroup>
                                    <Label  for="description">Description</Label>
                                    <Input style={inputstyle} type="textarea"
                                     name="description" 
                                     id="description" 
                                     placeholder="description your project"
                                     required 
                                    value={x.description}
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
