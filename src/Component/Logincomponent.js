/* import React, {Component} from 'react';
import {Col,Form,Button,Label,Input, FormGroup} from 'reactstrap';
export default  class Login extends Component{
constructor(props){
    super(props);
    this.state = {
        email : '',
        password: ''
      };
}
handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  render(){
            
    return(
           <div className="containerDesign">  
           <div style={{margin:'50px',padding:'20px'}}>  
                <Form onSubmit={this.handleSubmit}>
                     <h1 style={{color:'#008CBA'}}>Login</h1>
                     <FormGroup> 
                                 <Label style={{color:'#008CBA'}} for="email">Email</Label>
                                 <Col sm={10}>
                                 <Input style={{border:'none',borderBottom:'2px solid red',width:'100%',fontSize:'16px',padding:'12px 10px 12px 8px'}}
                                       type="text" 
                                       name="email" 
                                       id="email"
                                       placeholder="Email"
                                       value={this.state.email}
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
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    required />      </Col>
                    </FormGroup>
                    <FormGroup> 
                    <Col sm={{ size: 10, offset: 2 }}>
                               <Button className="button" color="primary"
                                     // style={{textAlign:'center',color:'red'}}
                                      type="submit"> Login
                               </Button> </Col>
                               <p style={{textAlign:'right'}}>New User <a href="/Register" target="_self">Sign Up</a></p>
                    </FormGroup>
                </Form>
              
           </div>
       </div>
    );
    }
} */