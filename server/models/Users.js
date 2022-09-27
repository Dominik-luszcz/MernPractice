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
    calorieInfo: {
        sex: {
            type: Number,
            required: false
        },
        weight: {
            type: Number,
            required: false
        },
        activity: {
            type: String,
            required: false
        },
        height: {
            type: Number,
            requried: false
        }
    }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;