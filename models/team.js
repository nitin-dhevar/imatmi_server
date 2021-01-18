var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var Team  = mongoose.model('Team',{
    
  teamId :{
    type:Number,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  team : [String],
  mandatoryTS : [String],
  optionalTS : [String]

});

module.exports = {
  Team
};