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
    },
    imageURL:{
        type: String,
        default: ""
    },
    classOf: {
        type: String,
        default: ""
    },
    headline:{
        type: String,
        default: ""
    },
    address:{
        type: Object,
        properties:{
            city:{
                type: String,
                default: ""
            },
            state:{
                type: String,
                default: ""
            },
            zip:{
                type: String,
                default: ""            
            },
            country:{
                type: String,
                default: ""           
            }
        },
        default: {city: "", state: "", zip:"", country:""}
    },
    schools:{
        type: Array,
        properties:
        {
            degree: {
                type: String,
                required: false,
                default: ""       
            },
            schoolName:
                {
                type: String,
                required: false,
                default: ""
            },
            fieldOfStudy: {
                type: String,
                required: false,
                default: ""        
            },
            activities: {
                type: String,
                required: false,
                default: ""        
            },
            fromYear: {
                type: String,
                required: false,
                default: ""        
            },
            toYear: {
                type: String,
                required: false,
                default: ""        
            }
        },
        default: []
    },
jobs:{
    type: Array,
    properties:
        {
            jobTitle: {
                type: String,
                required: false,
                default: ""       
            },
            company:
                {
                type: String,
                required: false,
                default: ""
            },
            jobLocation: {
                type: String,
                required: false,
                default: ""        
            },
            startMonth: {
                type: String,
                required: false,
                default: ""        
            },
            startYear: {
                type: String,
                required: false,
                default: ""        
            },
           endMonth: {
                type: String,
                required: false,
                default: ""        
            },
            endYear: {
                type: String,
                required: false,
                default: ""        
            },
            jobDescription:{
                type: String,
                required: false,
                default: ""
                
            }
        },
        default: []
    }
}, {minimize: false});

UserSchema.method({});

module.exports = mongoose.model("User", UserSchema);
