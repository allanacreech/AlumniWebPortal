var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    authorId:{
        type: Schema.Types.ObjectId,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: false
    },
    body: {
        type: String,
        required: true
    }
});

BlogSchema.method({});

BlogSchema.statics = {
    list(limit) {
        if (!limit) {
            limit = 50; //default to returning only 50 if not otherwise specified
        }
        return this.find()
            .limit(limit)
            .sort({date: -1})
            .exec();
    },
    filterBlogsByCategory(categories){
        console.log(categories);
        return this.where('category').in(categories)
            .limit(50)
            .sort({date: -1})
            .exec();
    },
    getByAuthor(author){
        return this.find({author: author});
    },
    getByDate(date){
        return this.find({date: date})
    }
};

module.exports = mongoose.model("Blog", BlogSchema);
