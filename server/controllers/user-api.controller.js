"use strict";
var User = require("../models/User");
var express = require("express");
var passport = require("../config/passport");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var router = express.Router();
var path = require("path");

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
    var introData = {imageURL: req.body.imageURL, headline: req.body.headline, address: {country: req.body.country, 
        city: req.body.city, state: req.body.state, zip: req.body.zip}};
        console.log(introData);
    User.update({_id: req.params.id}, introData,{}).then(data => {
        console.log(data);
        res.json(data);
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

router.route("/").get(isAuthenticated, getUserLoginInfo);
router.route("/all").get(isAuthenticated, getUserInfo);
router.route("/updateIntro/:id").post(isAuthenticated, updateIntroInfo);
router.route("/updateExperience/:id").post(isAuthenticated, updateExperienceInfo);
router.route("/updateEducation/:id").post(isAuthenticated, updateEducationInfo);

module.exports = router;