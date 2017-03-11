var axios = require("axios");

var AlumniWebPortalData = {
    getBlogs: function() {
        return axios.get("/api/blogs");
    }

};

module.exports = AlumniWebPortalData;