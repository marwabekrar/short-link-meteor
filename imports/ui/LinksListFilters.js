import React from 'react';
import {Tracker} from 'meteor/tracker';
import {session} from 'meteor/session';


export default class LinksListFilters extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      showVisible : true
    };
  }
  
  componentDidMount(){
       
   this.visibilityTracker = Tracker.autorun(()=>{
     
    
     this.setState({showVisible : Session.get('showVisible')});
        
    });
  }
  
  componentWillUnmount(){
    
    this.visibilityTracker.stop();
  }
  
  render(){
    
    return(
          <div> 
            <label className='checkbox'>  
            <input className='checkbox__box' type = "checkbox" checked={!this.state.showVisible} onChange = {(e)=>{
            Session.set('showVisible', !e.target.checked);

            }}/>
            show hidden links
            </label>
          </div>
  );
  }
} 



/*
//Avant d'avoir le prbleme du checkbox aui n4est pas checked quand on affiche la liste des hidden links
export default () =>{
  
  return(
  <div> 
    <label>  
    <input type = "checkbox" onChange = {(e)=>{
    Session.set('showVisible', !e.target.checked);
    
    }}/>
    show hidden links
    </label>
  </div>
  )
  
};*/