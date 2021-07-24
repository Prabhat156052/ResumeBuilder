import React, {Component} from 'react';
import Template1Img from '../assets/images/Template1.png';
import Template2Img from '../assets/images/Template2.png';
import Template3Img from '../assets/images/Template3.png';
import 'bootstrap/dist/css/bootstrap.css';
import {Carousel} from 'react-bootstrap';
import CarousalComponent from './CarouselContainer';
class Home extends Component{
    render(){
        console.log("props >>",this.props)
        return(
            <div style={{height:'auto'}}>
            <div style={{textAlign:'center',padding:'10px',backgroundColor:'mintcream'}}>
            <h1 style={{color:'lightseagreen'}}>Create your resume here!</h1>
            <h6>Many people do not know how to use latex. So it becomes a serious problem for those people who want to make their resume..
             We have built this very easy to use mern stack-based website,
             where a user just needs to fill a form and he/she will get the resume in a nice looking professional format.</h6>
             </div>
             <div style={{backgroundColor:'lightskyblue'}}>
             
             <div style={{textAlign:'center',paddingTop:'20px'}}>
                 <h1> Beautiful ready-to-use resume templates</h1>
            </div>
             <div style={{display:'flex',padding:'50px',margin:'0px'}}>
             <div style={{textAlign:'center',padding:'50px',margin:'10px'}}>
                 <img src={Template1Img} width="350" height="450" />
                 <h4>First Template</h4>
            </div>
            <div style={{textAlign:'center',padding:'50px',margin:'10px'}}>
                 <img src={Template2Img} width="350" height="450" />
                 <h4>Second Template</h4>
            </div>
            <div style={{textAlign:'center',padding:'50px',margin:'10px'}}>
                 <img src={Template3Img} width="350" height="450" />
                 <h4>Third Template</h4>
            </div>
            </div>
            
            </div>
            <div style={{height:'auto'}}>
            <CarousalComponent/>
          </div>
            </div>
            
        );
    }
}
export default Home;