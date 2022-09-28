import React from 'react';
import { useState, useEffect } from 'react';
//import { render } from "react-dom";
import UsersList from "./users_list";
import Axios from 'axios';

function CalorieCalculator() {
    const [sex, setSex] = useState("");
    const [activity, setActivity] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [calories, setCalories] = useState("");
    const [age, setAge] = useState("")
    var activity_level = 0;

    const calculateCalories = () => {
        if(activity === "low"){
            activity_level = 1.2;
        } else if (activity === "medium"){
            activity_level = 1.5;
        }else{
            activity_level = 1.7;
        }

        if(sex === "female"){
            setCalories( activity_level * (10 * weight + 6.25*height - 5*age -161));
        } else {
            setCalories(activity_level *(10*weight + 6.25 * height - 5 * age + 5));
        }
    }

    return (
        <><h1>This is the calorie counter!</h1>
        <h2>Select a user:</h2>
        <UsersList />

            <div>
                <input type = "Number" placeholder='Height(cm)...' onChange={(event) => {
                    setHeight(event.target.value);
                }}/>
                <input type = "Number" placeholder='Weight(kg)...' onChange={(event) => {
                    setWeight(event.target.value);
                }}/>
                <input type = "text" placeholder='Sex (male or female)...' onChange={(event) => {
                    setSex(event.target.value);
                }}/>
                <input type = "Number" placeholder='Age...' onChange={(event) => {
                    setAge(event.target.value);
                }}/>
                <input type = "Text" placeholder='Activity level (low, medium, high)...' onChange={(event) => {
                    setActivity(event.target.value);
                }}/>
                <button onClick={calculateCalories}> Calculate </button>
            </div>

            <div>
                {"BMR:  "}{calories}
            </div>
            <div>
                {"Bulk:  "}{calories + 300}
            </div>
            <div>
                {"Cut:  "}{calories - 300}
            </div>
        </>
    );
}

export default CalorieCalculator;