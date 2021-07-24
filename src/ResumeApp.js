import React from 'react';
import Profile from './Component/Profile';
import Education from './Component/Education';
import { Link, Route,useRouteMatch } from 'react-router-dom';
import {Switch } from 'react-router-dom';
import Skills from './Component/Skills';
import Achivement from './Component/Achivement';
import Project from './Component/Project';
import ResumeComponent from './Component/ResumeComponent';
import Template2 from './Templates/Template2';
import Language from './Component/Language';
import Image from './Component/Image';
const Resumeapp = ({}) => {
       const {path,url} = useRouteMatch();
        return (
            <div style={{display:'flex'}}>
                
                 <ul className="nestednav">
                    <li>
                        <Link to={`${url}/`}>Image</Link>
                   </li> 
                   
                    <li>
                        <Link to={`${url}/profile`}>Profile</Link>
                    </li>
                    <li>
                        <Link to={`${url}/education`} >Education</Link>
                    </li>
                    <li>
                        <Link to={`${url}/skills`}>Skills</Link>
                    </li>
                    <li>
                        <Link to={`${url}/project`}>Project</Link>
                    </li>
                    <li>
                        <Link to={`${url}/achivement`}>Achivement</Link>
                    </li>
                    <li>
                        <Link to={`${url}/language`}>Language</Link>
                    </li>
                    
                    <li>
                       <Link to={`${url}/resumecomponent`}>Resume  </Link>
                    </li>
                    
                    
                 </ul>
                 <div>
                 <Switch>
                    <Route path={`${path}/`} component={Image} exact />
                    <Route path={`${path}/profile`} component={Profile} exact />
                    <Route path={`${path}/education`} component={Education}  />
                    <Route path={`${path}/skills`} component={Skills}  />
                    <Route path={`${path}/project`} component={Project}  />
                    <Route path={`${path}/achivement`} component={Achivement}  />
                    <Route path={`${path}/language`} component={Language}  />
                    <Route path={`${path}/resumecomponent`} component={ResumeComponent}/>
                    
                 </Switch>
                </div>

            </div>
        )
    
}
export default Resumeapp;