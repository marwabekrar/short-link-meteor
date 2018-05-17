import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types'



const PrivateHeader = (props) =>{
  /*const onLogout = () =>{
    Accounts.logout((err)=>{'logout', err});
  }*/
  return (
      <div className='header'>
      <div className='header__content'>
      <h1 className='header__title'> {props.title} </h1>
        {/* or do this <button onClick={onLogout}> Logout</button>*/}
        <button  className='button button--link-text' onClick={ () => Accounts.logout((err)=>{'logout', err})}> Logout</button>
      </div>      
      </div>

    );
};


PrivateHeader.propTypes ={
  title : PropTypes.string.isRequired
  
};

export default PrivateHeader;



/*export default class PrivateHeader extends React.Component{
  <button onClick={ () => Accounts.logout((err)=>{'logout', err})}> Logout</button>
   onLogout(){
    //this.props.history.push('/');
    Accounts.logout((err)=>{'logout', err});
 
  }

  render(){
    
    return (
      <div>
      <h1> {this.props.title} </h1>
        <button onClick={this.onLogout.bind(this)}> Logout</button>
      </div>

    );
  
  }
}
PrivateHeader.propTypes ={
  title : PropTypes.string.isRequired
  
};*/
