var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var ActionPlan  = mongoose.model('ActionPlan',{
  
    skill:{
    type:String,
    //required:true, //text is required
    //minlength:1,
    trim: true  
  },
  child : [String],
  beginnerModule : [String],
  beginnerTime : [String],
  intermediateModule : [String],
  intermediateTime : [String],
  advancedModule : [String],
  advancedTime : [String]
});

module.exports = {
    ActionPlan
};