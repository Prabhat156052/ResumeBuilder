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
    const data = localStorage.getItem('languages');
    if(data){
      console.log(JSON.parse(data));
      return JSON.parse(data);
    }
    else{
      return []
    }
  }

  export default function Language(){
    
    const[languages,setLanguage] = useState(getDatafromLS);

    const [inputList, setInputList] = useState([{language:"" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
      };

    const handleAddClick = () => {
        setInputList([...inputList, { language:"" }]);
      };

      const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
      };

     const handleSubmit = e => {
        e.preventDefault();
        let language={
           inputList
        }
       setLanguage([...languages,language])
    }
    
    useEffect(()=>{
      localStorage.setItem('languages',JSON.stringify(languages));
    },[languages])
    
    const inputstyle={border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'};
    
  
    return (
        <div>
        <div style={{backgroundColor:"whitesmoke",marginLeft:'30px',width:'auto',textAlign:'left'}}>
        <h4 style={{margin:'10px'}}>Language</h4>       
        <Form onSubmit={handleSubmit}> 
        <Container fluid>
        {inputList.map((x, i) => {
            return(
                <div>
              <Row>
                   <Col md="6">
                         <FormGroup>
                     
                                    
                         <Input style={inputstyle} name="language" id="language" placeholder="Hindi" required 
                         value={x.language}
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
