const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }, 
    sex: {
        type: String,
        required: false
    },
    weight: {
        type: Number,
        required: false
    },
    height: {
        type: Number,
        required: false
    },
    activity: {
        type: String,
        requried: false
    },
    calories: {
        type: Number,
        required: true
    }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;