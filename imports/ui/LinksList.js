import {Meteor} from 'meteor/meteor';
import React from "react";
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';
import FlipMove from 'react-flip-move';

import {Links} from '../api/links';
import LinksListItem from './LinksListItem';


export default class LinksList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      links :[]
    }  
  }
  
  componentDidMount(){
       
   this.linksTracker = Tracker.autorun(()=>{
       Meteor.subscribe('links');
      const links = Links.find({visible:Session.get('showVisible')}).fetch();
      this.setState({links});
        
    });
  }
  
  componentWillUnmount(){
    
    this.linksTracker.stop();
  }
  renderLinksListitems(){
    if(this.state.links.length === 0 ){
      return (<div className='item'> 
              <p className='item__status-message'> No Links Found </p>
              </div>
             );
       
       } 
    else {
      return this.state.links.map((link) => {
          // I can`t do this because the absoluteUrl is giving a wrong link
          //const shortUrl = Meteor.absoluteUrl(link._id);
         // this is why I am using this , but if I give this project to another colleague working on another port, it won't  work for him excepted if he changes this string 
          const shortUrl = 'http://simplecommerce.hosting:3050/'+link._id;
          //console.log('link._id', link._id);
          //console.log('shortUrl', shortUrl);
          return  <LinksListItem  key={link._id} shortUrl={shortUrl}  {...link} /> 
                       });
  }
  }
  
  render(){
    return (
      <div>
      
      <div>
      <FlipMove maintainContainerHeight={true}>
      {this.renderLinksListitems()}
      </FlipMove>
      </div>
      </div>
    );
  }
}


