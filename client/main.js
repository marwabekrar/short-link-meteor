import {Meteor} from 'meteor/meteor';
//import React from 'react';
import ReactDOM from 'react-dom';
//import { Router, Route, Switch,Redirect } from 'react-router-dom';
//import createHistory from 'history/createBrowserHistory';
import {Tracker} from 'meteor/tracker';
import {session} from 'meteor/session';
import {routes, onAuthChange} from "../imports/routes/routes";
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(()=>{
  const isAuthenticated = !! Meteor.userId();
  onAuthChange(isAuthenticated);
 
});






Meteor.startup(()=>{
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));
  
});

//import {session} from 'meteor/session';
/*Session.set('name', 'marwa');

Tracker.autorun(()=>{
  const name = Session.get('name');
  console.log('Name:', name);
});*/


/*import SignUp from '../imports/ui/Signup';
import Lnk from './../imports/ui/Lnk';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';



const history = createHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/lnk'];
/*const onEnterPublicPage = ()=>{
  if (Meteor.userId()){
    history.push('/lnk');
  }
}
const onEnterPrivatePage = ()=>{
  if (!Meteor.userId()){
     history.push('/');
  }
}

const routes =(
<Router history={history}>
     <Switch>
         <Route path='/'  exact={true} render={() => {return Meteor.userId() ? <Redirect to="/lnk" /> : <Login />}} />
         <Route path='/signup'   render={() => {return Meteor.userId() ? <Redirect to="/lnk" /> : <SignUp /> }}/>
         <Route path='/lnk' render={() => {return Meteor.userId() ? <Lnk/> : <Login /> }} />
         <Route path='*' component={NotFound}/>
         
     </Switch>
</Router>
); */

/*Tracker.autorun(()=>{
  const isAuthenticated = !! Meteor.userId();
  
  
  /*const pathname = history.location.pathname;
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  if (isUnauthenticatedPage && isAuthenticated){
    history.replace('/lnk');
  } else if (isAuthenticatedPage && !isAuthenticated){
    history.replace('/');
  }
  //const location = history.location;
  //console.log('isAuthenticated',isAthenticated);
  //console.log('pathname', pathname);
  //console.log('location', location);
}); */



/*Meteor.startup(()=>{
  ReactDOM.render(routes, document.getElementById('app'));
  
});*/


//import createBrowserHistory from 'history/createBrowserHistory'
//import { BrowserRouter, Route } from 'react-router-dom'
//import {createBrowserHistory} from 'history';
//import { Router, Route } from 'react-router';
//import {Switch} from 'react-router'; 



//window.browserHistory = browserHistory;
//window.browserHistory = createBrowserHistory();
//const browserHistory = createBrowserHistory();
//window.browserHistory = createHistory();

/*const routes =(
 <BrowserRouter>
          <Route  path='/signup' component={SignUp}/>
         
  
   </BrowserRouter>
   
   
);
*/

    


/*const routes =(
<Router history = {browserHistory}>
  <Route path='/signup' component={SignUp}/>
  <Route path='/Link' component={Link}/>
 </Router>

);*/




/*const history = createBrowserHistory();
const routes =(
<Router history={history}>
  <Route path='/signup' component={SignUp}/>
 
 </Router>

);*/
