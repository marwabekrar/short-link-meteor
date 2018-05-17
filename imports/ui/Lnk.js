import React from 'react';
import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader';
import LinksListFilters from './LinksListFilters';
// Avec Stateless functions

export default () => { 
    return (
    <div>
    <PrivateHeader title ="Your Links"/>
      <div className='page-content'>
        <LinksListFilters/>
        <AddLink/>
        <LinksList/> 
      </div>
   </div>
   );
  
  
}





// avec React component

/*import { Meteor } from 'meteor/meteor';
import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Links} from '../api/links';
//import createHistory from 'history/createBrowserHistory';
import LinksList from './LinksList';
import AddLink from './AddLink';
import PrivateHeader from './PrivateHeader'

export default class Lnk extends React.Component{
 
 
  
  render (){
    
    return (
    <div>
    <PrivateHeader title ="Your Links"/>
    <LinksList/>
     <AddLink/>
   </div>
    
    );
  }
  
}*/

//ca marche aussi
//<button onClick={()=>{this.props.history.push('/')}}> Logout</button>  