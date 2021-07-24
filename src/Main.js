import React, {Component} from 'react';

import Footer from './Component/Footercomponent';
import Header from './Component/Headercompoent';
import Home from './Component/HomeComponent';
import ContactUs from './Component/Contactuscomponent';
import About from './Component/AboutComponent'
import Resume from './ResumeApp';
import NotFound from './Component/NotFound';
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import history from "./Component/historyObject";
import OtpLogin from './Component/OtpLogin';
class Main extends Component{
    render(){
        return(
            <Router history={history}>
    <div >
      <Header/> 
            <Switch>
              <Route path='/' component={Home} exact /> 
              <Route path="/resume" component={Resume}/>
              <Route path="/otplogin" component={OtpLogin}/>
              <Route path='/contactus' component={ContactUs}/>
              <Route path='/about' component={About}/>
              <Route component={NotFound}/>
              
              </Switch>
      <Footer/>
      </div>
    </Router>
        );
    }
}
export default Main;