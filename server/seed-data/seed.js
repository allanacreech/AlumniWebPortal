var Blogs = require("../models/Blog");
var seedData = require("./data");

var DatabaseSeeder = {
    runSeed: function() {
        let self = this;
        Blogs.list().then(data => {
            if(data.length > 0){
                //database already seeded.
                return;
            }
            console.log("Seeding database.")
            self.seed();
        });
    },

    seed: function() {
        let self = this;
        self.seedBlogs();
    },

    seedBlogs: function() {
        Blogs.remove({}) //first clear out any existing items
            .then(() => {
                console.log("Adding blogs");
                for (let i = 0; i < seedData.blogs.length; i++) {
                    Blogs.create(seedData.blogs[i]);
                }
            });
    }

}

module.exports = DatabaseSeeder;