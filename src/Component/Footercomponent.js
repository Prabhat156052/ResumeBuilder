import React, {} from 'react';
function Footer(props){
    
    return(
        <div className="footer">
        <h4 style={{textAlign:'left'}}>Social Media</h4>
        <div  style={{display:'flex',textAlign:'left' }}>
               <a className="btn btn-social-icon btn-google" href="http://google.com/" style={{padding:'10px' }}><i className="fa fa-google"></i></a>
               <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="style={{padding:'10px' }}><i className="fa fa-facebook"></i></a>
               <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"style={{padding:'10px' }}><i className="fa fa-linkedin"></i></a>
               <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"style={{padding:'10px' }}><i className="fa fa-twitter"></i></a>
               <a className="btn btn-social-icon btn-google" href="http://youtube.com/" style={{padding:'10px' }}><i className="fa fa-youtube"></i></a>
               <a className="btn btn-social-icon" href="mailto:"style={{padding:'10px' }}><i className="fa fa-envelope-o"></i></a>
        
            </div>
        <div className="row justify-content-center">         
            <div className="col-auto">
            <p style={{textAlign:'center'}}>© Copyright 2021 Resume Builder</p>
            </div>
        </div>
    </div>
    );
}
export default Footer;