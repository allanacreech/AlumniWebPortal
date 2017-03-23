
"use strict";
var axios = require("axios");

var AlumniWebPortalData = {
    getBlogs: function() {
        return axios.get("/api/blogs");
    },
    createBlog: function(blog){
        return axios.post("/api/blogs/create", blog);
    },
    getEducation: function() {
        return axios.get("/api/education");
    },

    updateIntroData: function(userId, introData){
        return axios.post("/api/userinfo/updateIntro/"+userId, introData);
    },

    updateExperienceData: function(userId, experienceData){
        return axios.post("/api/userinfo/updateExperience/"+userId, experienceData);
    },

    updateEducationData: function(userId, educationData){
        return axios.post("/api/userinfo/updateEducation/"+userId, educationData);
    }    
};


"use strict";
var axios = require("axios");

var AlumniWebPortalData = {
    getBlogs: function() {
        return axios.get("/api/blogs");
    },
    createBlog: function(blog){
        return axios.post("/api/blogs/create", blog);
    },
    getEducation: function() {
        return axios.get("/api/education");
    },

    updateIntroData: function(userId, introData){
        return axios.post("/api/userinfo/updateIntro/"+userId, introData);
    },

    updateExperienceData: function(userId, experienceData){
        return axios.post("/api/userinfo/updateExperience/"+userId, experienceData);
    },

    updateEducationData: function(userId, educationData){
        return axios.post("/api/userinfo/updateEducation/"+userId, educationData);
    }    
};


module.exports = AlumniWebPortalData;