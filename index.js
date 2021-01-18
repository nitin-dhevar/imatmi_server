const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Applicant } = require(process.cwd() + "/models/applicant");
const { Employee } = require(process.cwd() + "/models/employee")
const { RoleToSkill } = require(process.cwd() + "/models/roleToSkills");
const { Review } = require(process.cwd() + "/models/reviewModel");
const { ReviewResult } = require(process.cwd() + "/models/reviewResult");
const {ActionPlan} = require(process.cwd() + "/models/actionPlan" );
const {Team} = require(process.cwd() + "/models/team" );


var cors = require("cors");

app.use(cors());
var url =
  "mongodb+srv://dbAdmin:codemonk@cluster0.nptfh.mongodb.net/MIS?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then((result) => console.log(`Connected to db `))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).send("Successfully Deployed");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/addApplicant", (req, res) => {
  var tempfName = req.body.fname;
  var templName = req.body.lname;
  var tempid = req.body.id;
  var temprole = req.body.role;
  var tempskills = req.body.skills;
  let status = "Success";

  var applicant = new Applicant({
    fName: tempfName,
    id: tempid,
    lName: templName,
    role: temprole,
    skills: tempskills,
  });
  applicant.save();
  res.send(status);
});

app.post("/addRoleToSkill",(req,res)=>{
  var tempRole = req.body.role;
  var tempSkills = req.body.skills;
  let status = "Success";
  var roleToSkills = new RoleToSkill({
    role : tempRole,
    skills : tempSkills
  });
  roleToSkills.save();
  res.send(status);
})

app.post("/addReviewData",(req,res)=>{
  var tempEmpId = req.body.empID;
  var tempRevId = req.body.revID;
  var tempQ = req.body.Q;
  var tempSkills = req.body.skills;
  var tempScores = req.body.scores;
  let status = "Success";
  var review = new Review({
    empID : tempEmpId,
    revID : tempRevId,
    Q : tempQ,
    skills : tempSkills,
    scores : tempScores
  });
  review.save();
  res.send(status);
})

app.get("/getReviewData",(req,res)=>{
  var tempEmpId = req.body.empID;
  async function getApplicants(){
    const temp = await Review.find({empID: tempEmpId }, function (err, data) {});
    res.json(temp);
}
  getApplicants();

})

app.get("/getQData",(req,res)=>{
  var tempQ = req.body.Q;
  async function getApplicants(){
    const temp = await Review.find({Q: tempQ }, function (err, data) {});
    res.json(temp);
}
  getApplicants();

})

app.post("/addReviewResult",(req,res)=>{
  var tempEmpId = req.body.empId;
  var tempStrengths = req.body.strengths;
  var tempAOI = req.body.AOI;
  let status = "Success";
  var reviewResult = new ReviewResult({
    empId : tempEmpId,
    strengths : tempStrengths,
    AOI : tempAOI
  });
  reviewResult.save();
  res.send(status);
});

app.post("/addActionPlan",(req,res)=>{
  var tempSkill = req.body.skill;
  var tempChild = req.body.child;
  var tempBeginnerModule = req.body.beginnerModule;
  var tempBeginnerTime = req.body.beginnerTime;
  var tempIntermediateModule = req.body.intermediateModule;
  var tempIntermediateTime = req.body.intermediateTime;
  var tempAdavancedModule = req.body.advancedModule;
  var tempAdvancedTime = req.body.advancedTime;
  let status = "Success";
  var actionPlan = new ActionPlan({
    skill : tempSkill,
    child : tempChild,
    beginnerModule : tempBeginnerModule,
    beginnerTime : tempBeginnerTime,
    intermediateModule : tempIntermediateModule,
    intermediateTime : tempIntermediateTime,
    advancedModule : tempAdavancedModule,
    advancedTime : tempAdvancedTime
  });
  actionPlan.save();
  res.send(status);
});

app.post("/addTeam",(req,res)=>{
  var tempTeamId = req.body.teamId;
  var tempTeam = req.body.team;
  var tempMandatoryTS = req.body.mandatoryTS;
  var tempOptionalTS = req.body.optionalTS;
  let status = "Success";
  var team = new Team({
    teamId : tempTeamId,
    team : tempTeam,
    mandatoryTS : tempMandatoryTS,
    optionalTS : tempOptionalTS
  });
  team.save();
  res.send(status);
});

app.post("/getTeamSkills", (req, res) => {
  var tempTeamId=req.body.teamId;
   async function getUsers(tempTeamId){
       const user=await Team.find({teamId: tempTeamId }, function (err, data) {});
       res.json(user);
   }
   getUsers(tempTeamId);

});

app.post("/getReviewResult", (req, res) => {
  var tempEmpId =req.body.empId;
   async function getUsers(tempEmpId){
       const user=await ReviewResult.find({empId: tempEmpId }, function (err, data) {});
       res.json(user);
   }
   getUsers(tempEmpId);

});


app.post("/addEmployee", (req, res) => {
  var tempfName = req.body.firstName;
  var templName = req.body.lastName;
  var tempid = req.body.id;
  var tempemploymentType = req.body.employmentType;
  var tempskills = req.body.skills;
  var tempWorkEx = req.body.workEx;
  var tempcurrentRole = req.body.currentRole;
  let status = "Success";

  var employee = new Employee({
    firstName: tempfName,
    id: tempid,
    lastName: templName,
    employmentType: tempemploymentType,
    skills: tempskills,
    workEx: tempWorkEx,
    currentRole: tempcurrentRole

  });
  employee.save();
  res.send(status);
});

app.get("/getAllEmployees", (req, res) => {
            
  async function getEmployees(){
      const temp = await Employee.find();
      res.json(temp);
  }
  getEmployees();

});

app.get("/getAllApplicants", (req, res) => {
            
  async function getApplicants(){
      const temp = await Applicant.find();
      res.json(temp);
  }
  getApplicants();

});

app.post("/getRoleFilteredApplicant", (req, res) => {
  var tempRole=req.body.role;
   async function getUsers(tempRole){
       const user=await Applicant.find({role: tempRole }, function (err, data) {});
       res.json(user);
   }
   getUsers(tempRole);

});

app.post("/getTopRoles",(req,res) =>{
  var tempRole = req.body.role;
  async function getSkills(tempRole){
    const temp = await RoleToSkill.find({role:tempRole}, function(err,data){});
    var obj = temp[0];
    res.json(obj.skills);
  }
  getSkills(tempRole);
})

app.post("/getRoleFilteredEmployee", (req, res) => {
    var tempCurrentRole = req.body.currentRole;
    async function getUsers(tempCurrentRole)
    {
        const user = await Employee.find({currentRole: tempCurrentRole }, function (err, data) {});
        res.json(user);
    }
    getUsers(tempCurrentRole);

});
app.post("/getEmployeeById", (req, res) => {
  var tempId = req.body.id;
  async function getUsers(tempId)
  {
      const user = await Employee.find({id: tempId }, function (err, data) {});
      res.json(user);
  }
  getUsers(tempId);

});

app.post("/getSkillFilteredApplicants", (req, res) => {
  var tempskills=req.body.skills;
  var array = [];
  async function getApplicants(){
    const temp = await Employee.find();
    for(var i = 0; i < temp.length; i++) {
      var obj = temp[i];
      for(var j=0;j<obj.skills.length;j++){
        if(tempskills == obj.skills[j]){
        array.push(obj);
        break;}
      }
  }
    res.json(array);
}
getApplicants();
});

app.post("/getSkillFilteredEmployees", (req, res) => {
  var tempskills=req.body.skills;
  var array = [];
  async function getApplicants(){
    const temp = await Employee.find();
    for(var i = 0; i < temp.length; i++) {
      var obj = temp[i];
      for(var j=0;j<obj.skills.length;j++){
        if(tempskills == obj.skills[j]){
        array.push(obj);
        break;}
      }
  }
    res.json(array);
}

 getApplicants();
//   var tempskills=req.body.skills;
//   async function getApplicants(){
//     const temp = await Employee.find();
//     for(var i = 0; i < temp.length; i++) 
//     {
//         var obj = temp[i];
//         var intersection = tempskills.filter(x => obj.skills.includes(x));
//         var len1 = intersection.length;
//         var len2 = tempSkills.length;
//         var Score = len1/len2;
//         if(Score >= 0.6){
//           var tempRes = {
//           emp :  obj,
//           score: Score
//             };
//           response.push(tempRes);
//         }
//       }
//       res.json(response);
// }
// getApplicants();
  
});

app.post("/getRoleAndSkillFE", (req,res) => {
    var tempSkills = req.body.skills;
    var tempCurrentRole = req.body.currentRole;
    console.log(tempSkills);
    console.log(tempCurrentRole);
    async function getEmployees()
    {  
        console.log("Inside getEmployees")
        const temp = await Employee.find({currentRole: tempCurrentRole }, function (err, data) {});
        console.log("size returned from db"+temp.length);
        console.log(temp);
        var response = [];
        for(var i = 0; i<temp.length; i++){
        var obj = temp[i];
        console.log("obj"+obj);
        var intersection = tempSkills.filter(x => obj.skills.includes(x));
        console.log("intersection"+intersection);
        var len1 = intersection.length;
        var len2 = tempSkills.length;
        var Score = len1/len2;
        if(Score >= 0.6){
          var tempRes = {
          emp :  obj,
          score: Score
            };
          console.log("tempRes"+tempRes);
          response.push(tempRes);
        }
      }
      response.push(tempRes);
  
        
        console.log("response"+response);
        res.json(response);
    }
    getEmployees();

});




const port = process.env.PORT || "8000";
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
