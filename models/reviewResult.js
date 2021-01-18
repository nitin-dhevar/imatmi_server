var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var ReviewResult  = mongoose.model('ReviewResult',{
  
  empId:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  strengths : [String],
  AOI : [String],
  strengthWithFlags : [String]
});

module.exports = {
  ReviewResult
};