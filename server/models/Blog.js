var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    author: {
        type: String,
        required: true
    },
    // title: {
    //     type: String,
    //     required: true
    // },
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
    getByAuthor(author){
        return this.find({author: author})
    },
    getByDate(date){
        return this.find({date: date})
    }
};

<<<<<<< HEAD
module.exports = mongoose.model("Blog", BlogSchema);
=======
module.exports = mongoose.model("Blog", BlogSchema);
>>>>>>> a1760c3cd218575119d3dbecd6430cbf97a2e687
