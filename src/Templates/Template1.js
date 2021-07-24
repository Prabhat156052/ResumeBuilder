import React, { useRef } from "react";

function Template1(){
    var retrievedData = localStorage.getItem("users");
    var user = JSON.parse(retrievedData);
    var education = JSON.parse(localStorage.getItem("educations"))
    var project = JSON.parse(localStorage.getItem("projects"));
    var award = JSON.parse(localStorage.getItem("awards"));
    var skill = JSON.parse(localStorage.getItem("skills"));
    var language = JSON.parse(localStorage.getItem("languages"));
    const listSkills = skill[skill.length-1].inputList.map((s) =>  <p style={{padding:'5px',marginRight:'5px'}}>{s.skills}</p>  );
    const listAwards = award[award.length-1].inputList.map((a) => <p>{a.achivement}</p>  );
    const listLanguages = language[language.length-1].inputList.map((l) => 
     <p className="language" style={{padding:'5px',marginRight:'5px'}} >{l.language}</p>
     );  
    const listEducation = education[education.length-1].map((e) => 
                                                                  <div>
                                                                  <h6>{e.school} -{e.batch}</h6>
                                                                  <p>{e.degree}</p>
                                                                  </div>
                                                                 );
    const listProject = project[project.length-1].map((p) => 
                                                                 <div>
                                                                 <h6>{p.projectname} </h6>
                                                                 <p>{p.description}</p>
                                                                 </div>
                                                                );                                                             
                                                                  
    

    return(   
            
             <div>

              <div className="template1" style={{  backgroundColor:'white',padding:'5px'}}>
                     <div style={{backgroundColor:'#006064',padding:'5px',display:'flex',height:'14%'}}>
                        <div style={{width:'70%'}}>
                          <h3 style={{color:'white',textAlign:'left' ,paddingLeft:'30px',paddingTop:'20px'}}>{user[user.length-1].name}</h3>
                        
                        <ul className="ui" style={{listStyle:'none',fontSize:'14px'}}> 
                          <li>
                             <i className="fa fa-envelope fa-fw"></i>
                             {user[user.length-1].email}
                         </li>   
                         <li>
                             <i className="fa fa-mobile fa-fw"></i>
                             +91-{user[user.length-1].mobile}</li>
                         <li>
                             <i className="fa fa-address-book fa-fw"></i>
                             {user[user.length-1].district},&nbsp; 
                             {user[user.length-1].state}, &nbsp;
                             {user[user.length-1].country}, &nbsp;
                         </li>
                        </ul>
                        </div>
                        
                        <div className="gallery" style={{alignItems:'center'}}>
    
                          <img className="profileImg" src={localStorage.getItem('images')} alt="Profile" width="150" height="150"/>
                        
                        
                      </div> 
                     </div>
                     <div className="resumechild" style={{height:'80%',backgroundColor:'#E6E6E6',padding:'5px'}}>
                          <h5 className="title" >OBJECTIVE</h5>
                          
                          <p style={{wordWrap:'break-word'}}>{user[user.length-1].objective}</p> 
                          <h5 className="title" >EDUCATION</h5>
                          
                          {listEducation}
                          
                          <h5 className="title" >SKILLS</h5>
                          <div style={{display:'inline-flex'}}> 
                                
                                {listSkills}
                          </div>
                          <h5 className="title" >PROJECT</h5>
                              {listProject}
                          <h5 className="title" >ACHIVEMENT</h5>
                          
                          {listAwards}
                          <h5 className="title" >LANGUAGE</h5>
                          <div style={{display:'inline-flex'}}> 
                                
                                 {listLanguages}
                          </div>
                          

                     </div>
                
               
          </div>
         
       
       </div>
        
    );
}

export default Template1;
