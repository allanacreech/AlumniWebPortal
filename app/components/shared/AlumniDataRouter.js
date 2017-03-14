var axios = require("axios");

var AlumniWebPortalData = {
    getBlogs: function() {
        return axios.get("/api/blogs");
    },
    createBlog: function(blog){
        return axios.post("/api/blogs/create", blog);
    }

<<<<<<< HEAD
};
=======
};

module.exports = AlumniWebPortalData;
>>>>>>> a1760c3cd218575119d3dbecd6430cbf97a2e687
