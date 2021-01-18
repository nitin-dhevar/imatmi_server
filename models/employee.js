var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Employee  = mongoose.model('Employee',{
  
  firstName:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
   lastName:{
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
  employmentType :{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  currentRole :{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  workEx :{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  skills : [String]

});

module.exports = {
  Employee
};