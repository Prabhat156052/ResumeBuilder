/* import React,{Component} from 'react';
import {Col,Form,Button,Label,Input, FormGroup} from 'reactstrap';
 class Register extends Component{
     constructor(props){
         super(props);
         this.state={
             name:'rahul',
             email:'rk@example.com',
             password:'rkqween'
         };
     }
     handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
     handleSubmit = e => {
        e.preventDefault();
        let user={
          name:this.state.name,
          email:this.state.email,
          password:this.state.password
        }
    }
        render(){
            return(
                   <div className="containerDesign">  
                   <div style={{margin:'10px',padding:'20px'}}>  
                        <Form onSubmit={this.handleSubmit}>
                             <h1 style={{color:'#008CBA'}}>Sign Up</h1>
                             <FormGroup> 
                                         <Label style={{color:'#008CBA'}} for="name">Name</Label>
                                         <Col sm={10}>
                                         <Input style={{border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'}}
                                               type="text" 
                                               name="name" 
                                               id="name"
                                               placeholder="Name"
                                              // value={this.state.email}
                                               onChange={this.handleInputChange} 
                                               required /> </Col>
                             </FormGroup>
                             <FormGroup> 
                                         <Label style={{color:'#008CBA'}} for="email">Email</Label>
                                         <Col sm={10}>
                                         <Input style={{border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'}}
                                               type="text" 
                                               name="email" 
                                               id="email"
                                               placeholder="Email"
                                             // value={this.state.email}
                                               onChange={this.handleInputChange} 
                                               required /> </Col>
                             </FormGroup>
                             <FormGroup>  
                                       <Label style={{color:'#008CBA'}} for="password">Password</Label>
                                       <Col sm={10}>
                                       <Input style={{border:'none',borderBottom:'2px solid red', width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'}}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="password"
                                            //value={this.state.password}
                                            onChange={this.handleInputChange} 
                                            required /> 
                                            </Col>
                            </FormGroup>
                            <FormGroup>  
                                       <Label style={{color:'#008CBA'}} for="confirm password">Confirm Password</Label>
                                       <Col sm={10}>
                                       <Input style={{border:'none',borderBottom:'2px solid red', width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'}}
                                            type="password"
                                            name="confirm password"
                                            id="confirm password"
                                            placeholder="Confirm Password"
                                            //value={this.state.password}
                                            onChange={this.handleInputChange} 
                                            required /> 
                                            </Col>
                            </FormGroup>
                            <FormGroup> 
                            <Col sm={{ size: 10, offset: 2 }}>
                                       <Button className="button" color="primary"
                                             // style={{textAlign:'center',color:'red'}}
                                              type="submit"> Sign Up
                                       </Button> </Col>
                                       <p style={{textAlign:'right'}}>Already Registered <a href="/Login" target="_self">Sign In</a></p>
                            </FormGroup>
                        </Form>
                      
                   </div>
               </div>
            );
        }
    }
    export default Register; */