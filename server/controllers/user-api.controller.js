"use strict";
var User = require("../models/User");
var express = require("express");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var router = express.Router();
var path = require("path");
var app = express();

var multer = require("multer");
var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './');
  },
  filename: function (req, file, callback) {
    var fileExtension = ".bin"; //default
    switch(file.mimetype)
    {
        case "image/gif": fileExtension = ".gif"; break;
        case "image/jpeg": fileExtension = ".jpg"; break;
        case "image/png": fileExtension = ".png"; break;        
    }
    callback(null, file.originalName + '-' + Date.now() + fileExtension);
  }
});

var upload = multer({ storage : storage, limits: { fileSize: 1024*1024*50 }}).single('userPhoto');
// app.use(upload);

function getUserLoginInfo(req, res){
    console.log(req.user);
        res.json(req.user);       
}

function getUserInfo(req, res)
{

    User.findById(req.user._id).then(data => {
        console.log(data)
        res.json(data);
    });
}

function updateIntroInfo(req, res)
{
    var introData = {};
    if(req.body.imageURL)
    {
        introData.imageURL = req.body.imageURL;
    }

    if(req.body.headline)
    {
        introData.headline = req.body.headline;
    }
    
    if(req.body.country || req.body.city || req.body.state || req.body.zip)
    {
        introData.address = {};
        if(req.body.country)
        {
            introData.address.country = req.body.country;
        }
        
        if(req.body.city)
        {
            introData.address.city = req.body.city;
        }
        
        if(req.body.state)
        {
            introData.address.state = req.body.state;
        }
        
        if(req.body.zip)
        {
            introData.address.zip = req.body.zip;
        }
    }
    console.log("inside update intro info");
    console.log(introData);
    User.update({_id: req.params.id}, introData,{}).then(data => {
        console.log(data);
        res.json(data);
    });    
}

function updateImageInfo(req, res)
{
	upload(req,res,function(err) {
		if(err) {
			return res.end("Error uploading file.");
		}
        var imageLocation = {imageURL: ""};
            // console.log(req.body.userId);
            // console.log(req.body.image);
            console.log(req.file);
        User.update({_id: req.params.id}, imageLocation,{}).then(data => {
            console.log(data);
            res.json(data);
        });    
    });
}

function updateExperienceInfo(req, res)
{
    var experienceData = {jobTitle: req.body.jobTitle, company: req.body.company, jobLocation: req.body.jobLocation,
                            startMonth: req.body.startMonth, startYear: req.body.startYear, endMonth: req.body.endMonth,
                            endYear: req.body.endYear, jobDescription: req.body.jobDescription};
        console.log(experienceData);
    User.findOneAndUpdate({_id: req.params.id}, { $push: { "jobs": experienceData } }, { new: true }).then(data => {
        console.log(data);
        res.json(data);
    });    
}

function updateEducationInfo(req, res)
{
    var educationData = {schoolName: req.body.schoolName, degree: req.body.degree, fieldOfStudy: req.body.fieldOfStudy,
                            activities: req.body.activities, fromYear: req.body.fromYear, toYear: req.body.toYear};
        console.log(educationData);
    User.findOneAndUpdate({_id: req.params.id}, { $push: { "schools": educationData } }, { new: true }).then(data => {
        console.log(data);
        res.json(data);
    });    
}

function findAlumni(req, res){
    console.log("finding alumni");
    console.log(req.query);
    var query = {};
    if(req.query.firstName) query.firstName = new RegExp(req.query.firstName, "i");  //JavaScript RegExp
    if(req.query.lastName) query.lastName = new RegExp(req.query.lastName, "i");
//    if(req.query.degree) query.degree = req.query.degree;
    if(req.query.classOf) query.classOf = req.query.classOf;

    User.find(query).sort({lastName: 1, firstName: 1}).exec(function(err, data){
        console.log(data);
        res.json(data);
    });
    // res.json({success: 'yes'});
}

//gets
router.route("/").get(isAuthenticated, getUserLoginInfo);
router.route("/all").get(isAuthenticated, getUserInfo);
router.route("/findAlumni").get(isAuthenticated, findAlumni);

//posts
router.route("/updateIntro/:id").post(isAuthenticated, updateIntroInfo);
router.route("/updateImage/:id").post(isAuthenticated, upload, updateImageInfo);
router.route("/updateExperience/:id").post(isAuthenticated, updateExperienceInfo);
router.route("/updateEducation/:id").post(isAuthenticated, updateEducationInfo);

module.exports = router;