var axios = require("axios");

var AlumniWebPortalData = {
    getBlogs: function() {
        return axios.get("/api/blogs");
    },
    createBlog: function(blog){
        return axios.post("/api/blogs/create", blog);
    }

};

module.exports = AlumniWebPortalData;

