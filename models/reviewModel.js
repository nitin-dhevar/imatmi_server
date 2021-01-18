var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Review  = mongoose.model('Review',{
  
  empID:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  revID:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  }, 
  Q:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  skills : [String],
  scores : [Number]
});

module.exports = {
  Review
};