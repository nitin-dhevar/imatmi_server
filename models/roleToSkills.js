var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var RoleToSkill  = mongoose.model('RoleToSkill',{
    
  role :{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  skills : [String]

});

module.exports = {
  RoleToSkill
};