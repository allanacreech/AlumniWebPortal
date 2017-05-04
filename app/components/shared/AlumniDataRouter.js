"use strict";
var axios = require("axios");
var $ = require("jquery");

// var express = require("express");
// var app = express();
// var path = require("path");

// var multer = require("multer");
// var storage	=	multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, '/assets/images/userImages');
//   },
//   filename: function (req, file, callback) {
//     var fileExtension = ".bin"; //default
//     switch(file.mimetype)
//     {
//         case "image/gif": fileExtension = ".gif"; break;
//         case "image/jpeg": fileExtension = ".jpg"; break;
//         case "image/png": fileExtension = ".png"; break;        
//     }
//     callback(null, file.originalName + '-' + Date.now() + fileExtension);
//   }
// });

// var upload = multer({ storage : storage, limits: { fileSize: 1024*1024*50 }}).single('userPhoto');
// app.use(upload);

var AlumniWebPortalData = {
    getBlogs: function() {
        return axios.get("/api/blogs");
    },
    createBlog: function(blog){
        return axios.post("/api/blogs/create", blog);
    },
    filterBlogsByCategory: function(categories){
        return axios.get("/api/blogs/filterBlogsByCategory",{
            params:{  //you need this to pass query parameters in the url
                categories: categories
            }
        });
    },
    getEducation: function() {
        return axios.get("/api/education");
    },

    updateIntroData: function(userId, introData){
        return axios.post("/api/userinfo/updateIntro/"+userId, introData);
    },

    updateImageData: function(userId, imageData){
        console.log(imageData);
       // let data = {userId: userId, image: imageData};
       return axios.post("/api/userinfo/updateImage/"+userId, imageData);
    },

    updateExperienceData: function(userId, experienceData){
        return axios.post("/api/userinfo/updateExperience/"+userId, experienceData);
    },

    updateEducationData: function(userId, educationData){
        return axios.post("/api/userinfo/updateEducation/"+userId, educationData);
    },

    findAlumni: function(alumniSearchData){
        alumniSearchData = $.param(alumniSearchData);
        return axios.get("/api/userinfo/findAlumni?"+alumniSearchData);
    }    
};

module.exports = AlumniWebPortalData;