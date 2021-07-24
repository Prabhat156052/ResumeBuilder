import React from 'react';

 function Template3() {

    var retrievedData = localStorage.getItem("users");
    var user = JSON.parse(retrievedData);
    var education = JSON.parse(localStorage.getItem("educations"))
    var project = JSON.parse(localStorage.getItem("projects"));
    var award = JSON.parse(localStorage.getItem("awards"));
    var skill = JSON.parse(localStorage.getItem("skills"));
    var language = JSON.parse(localStorage.getItem("languages"));
    const listSkills = skill[skill.length-1].inputList.map((s) =>
                                                                  <li style={{listStyleType:'none'}}>
                                                                    {s.skills}</li> 
                                                                   );
    const listLanguages = language[language.length-1].inputList.map((l) => 
                                                                   <li style={{listStyleType:'none'}}>
                                                                   {l.language}</li> 
                                                                    );                                                             
    const listAwards = award[award.length-1].inputList.map((a) => <p>{a.achivement}</p>  );

    const listEducation = education[education.length-1].map((e) => 
                                                                  <div>
                                                                  <h6>{e.school} -{e.batch}</h6>
                                                                  <li style={{listStyleType:'none'}}>{e.degree}</li>
                                                                  </div>
                                                                 );
    const listProject = project[project.length-1].map((p) => 
                                                                 <div>
                                                                 <h6>{p.projectname} </h6>
                                                                 <li style={{listStyleType:'none'}}>{p.description}</li>
                                                                 </div>
                                                                );                                                             
                                                                  

    return (
        <div>
             
            <div className="template3">
               <div className="top"  >
                            <h3 style={{color:'white',padding:'5px',margin:'5px'}}>{user[user.length-1].name}</h3>
                            <h6>Student</h6>
               </div>     
               <div className="bottom" >
                            <div className="left">
                                             <h4 >OBJECTIVE</h4><hr/>
                                             <p style={{wordWrap:'break-word'}}>{user[user.length-1].objective}</p> 
                                             <h4 >EDUCATION</h4><hr/>
                                                 {listEducation}
                                             <h4>PROJECT</h4><hr/>
                                                 {listProject}
                                             <h4>ACHIVEMENT</h4><hr/>
                                                 {listAwards}
                            </div>
                            <div className="right"  > 
                                     
                                   <h5 className="title">PERSONAL</h5>
                                   <p>
                                      <i className="fa fa-envelope fa-fw"></i>
                                      {user[user.length-1].email}
                                  </p>
                                  <p>
                                      <i className="fa fa-mobile fa-fw"></i>
                                      +91-{user[user.length-1].mobile}
                                  </p>   
                                  <p> 
                                     <i className="fa fa-address-book fa-fw"></i>
                                     {user[user.length-1].district},&nbsp; 
                                     {user[user.length-1].state}, &nbsp;
                                     {user[user.length-1].country}
                                  </p>
                                  <h5 className="title">SKILLS</h5>
                                     {listSkills}
                                  <h5 className="title">LANGUAGE</h5>
                                     {listLanguages}
                            </div>                     
               </div>     
                  
            </div>
        </div>
    )
}
export default Template3;