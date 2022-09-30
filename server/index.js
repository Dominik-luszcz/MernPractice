const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/Users");
const cors = require('cors');
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://dom:D1234@cluster0.k5fcwan.mongodb.net/mernPractice?retryWrites=true&w=majority");

//res is fro frontend, rec for backend
app.get("/getUsers", (rec, res) => {
    userModel.find({}, (err, result) => {
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });

});

app.post("/createUser", async (rec, res) => {
    const user = rec.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user);
});
/*
app.patch("/user/:", async (rec, res) => {
    var updateObject = rec.body;
    id = req.params.id;
    db.users.update({_id  : ObjectId(id)}, {$set: updateObject});
});
*/

app.listen(3001, () => {
    console.log('Server is running');
});