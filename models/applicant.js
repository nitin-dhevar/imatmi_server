var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Applicant  = mongoose.model('Applicant',{
  
  fName:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
   lName:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  }, 
  id:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  role :{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  skills : [String]

});

module.exports = {
  Applicant
};