var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true        
    },
    lastName: {
        type: String,
        required: true        
    }
    
});

UserSchema.method({});

module.exports = mongoose.model("User", UserSchema);
