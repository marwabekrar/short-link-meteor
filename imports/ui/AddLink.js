import {Meteor} from 'meteor/meteor';
import React from 'react';
import Modal from 'react-modal';



export default class AddLink extends React.Component{
  constructor(props){
    super (props);
    this.state = {
      url: "",
      isOpen:false,
      error:''
    };
      
    
  };
  
  /*componentWillMount() {
    Modal.setAppElement('body');
}*/

onSubmit(e){
    e.preventDefault();
    //const url = this.refs.url.value.trim();
    //const url = this.state.url;
  //ES6
     const {url} = this.state;
    
      Meteor.call('links.insert', url,  (err, res) =>{
        if (!err){
           this.handleModalClose();
          //this.setState({url: '', isOpen: false, error:""});
          //this.refs.url.value = '';
        }else{
          this.setState({error: err.reason})
        }
        
      });
      //Links.insert({url, userId : Meteor.userId()});
      //this.refs.url.value = '';
    
  }
  onChange(e){
    this.setState({url: e.target.value});
  }
  
  HandleModalClose(){
    this.setState({
      isOpen: false,
      url:'',
      error:""
    });
  }
  
  
  render(){
  return (
   <div> 
    <button className="button" onClick={()=>{this.setState({isOpen: true})}}> + Add Link </button>
    <Modal 
          isOpen={this.state.isOpen} 
          contentLabel='Add link'
          ariaHideApp={false}
          onAfterOpen={()=>this.refs.url.focus()}
          onRequestClose={this.HandleModalClose.bind(this)}
          className='boxed-view__box'
          overlayClassName='boxed-view boxed-view--Modal'>
            
     
      <h1> Add New Link</h1>
          {this.state.error ? <p> {this.state.error}</p>: undefined}
          <form  className='boxed-view__form'  onSubmit={this.onSubmit.bind(this)}>
              <input type ='text' ref="url" placeholder='URL' value = {this.state.url} onChange = {this.onChange.bind(this)}/>
              <button className='button'>Add link</button>
              <button type ='button' className='button button--secondary' onClick={this.HandleModalClose.bind(this)}>Cancel</button>
          </form>
          
  </Modal>
   
 </div>
);
}
  



}