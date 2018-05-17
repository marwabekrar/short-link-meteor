import {Meteor} from 'meteor/meteor';
import React from 'react';
//import ReactDOM from 'react-dom';
import { Router, Route, Switch,Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
//import {Tracker} from 'meteor/tracker';



import SignUp from '../ui/Signup';
import Lnk from '../ui/Lnk';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';



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
}*/
export const onAuthChange = (isAuthenticated)=>{
   const pathname = history.location.pathname;
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  if (isUnauthenticatedPage && isAuthenticated){
    history.replace('/lnk');
  } else if (isAuthenticatedPage && !isAuthenticated){
    history.replace('/');
  }
}
export const routes =(
<Router history={history}>
     <Switch>
         <Route path='/'  exact={true} render={() => {return Meteor.userId() ? <Redirect to="/lnk" /> : <Login />}} />
         <Route path='/signup'   render={() => {return Meteor.userId() ? <Redirect to="/lnk" /> : <SignUp /> }}/>
         <Route path='/lnk' render={() => {return Meteor.userId() ? <Lnk/> : <Login /> }} />
         <Route path='*' component={NotFound}/>
         
     </Switch>
</Router>
);