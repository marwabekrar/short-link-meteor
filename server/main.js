import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';
import '../imports/api/users';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  
  //let now = new Date();
  //console.log(now);
  //let momentNow = moment();
  //console.log(momentNow.fromNow());
  //console.log(momentNow.format("MMM Do, YYYY  h:mm a"));
  
  
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });

    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else {
      next();
    }
  });
});

//Node HTTP and connect
 /*WebApp.connectHandlers.use((req, res, next)=>{
    console.log("middleware");
    console.log(req.url, req.method, "headers", req.headers, "query" , req.query);
    //res.statusCode=404;
    //res.setHeader("cos-header", 'head here!');
    //change body
    //res.write('<h1> Great Job, nothing to say</h1>');
    
    //res.end();
    next();
    //res.end();
   
  });*/

 // code to run on server at startup
 /* const employeeSchema = new SimpleSchema({
    name:{
      type: String,
      min:1,
      max:200   
    }, 
    hourlyWage: {
    type: Number,
    min:0  
    },
    email:{
      type: String,
      regEx:SimpleSchema.RegEx.EmailWithTLD
    }
                                          
  });
  employeeSchema.validate({
    name: "marwa",
    hourlyWage: 30 ,
    email: 'marwa@gmail.com'
  });*/
  