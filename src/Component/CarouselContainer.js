import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Step1Img from '../assets/images/Step1.png';
import Step2Img from '../assets/images/Step2.png';
import Step3Img from '../assets/images/Step3.png';
import Step4Img from '../assets/images/Step4.png';

export default function Img_Carousel() {
  return (
    <div style={{padding:'10px',paddingTop:'25px',display:'flex',backgroundColor:'papayawhip'}} >
    <div style={{width:'30%',height:'400px'}}> </div>
    <div className="img-crousel" style={{width:'550px',height:'400px',alignItems:'center'}}>
     <AliceCarousel autoPlay autoPlayInterval="500" autoPlayDirection="rtl">
      <img src={Step1Img} className="sliderimg" alt=""  />
      <img src={Step2Img} className="sliderimg" alt=""/>
      <img src={Step3Img} className="sliderimg" alt=""/>
      <img src={Step4Img} className="sliderimg" alt=""/>

    </AliceCarousel>
    </div>
    <div></div>
    </div>
  );
}
