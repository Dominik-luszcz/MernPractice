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

    const calculateCalories = () => {
        if(sex == "female"){
            setCalories(10 * weight + 6.25*height - 5*age -161);
        } else {
            setCalories(10*weight + 6.25 * height - 5 * age + 5)
        }
    }

    return (
        <><h1>This is the calorie counter!</h1>
        <h2>Select a user:</h2>
        <UsersList />

            <div>
                <input type = "Number" placeholder='Height...' onChange={(event) => {
                    setHeight(event.target.value);
                }}/>
                <input type = "Number" placeholder='Weight...' onChange={(event) => {
                    setWeight(event.target.value);
                }}/>
                <input type = "text" placeholder='Sex (male or female)...' onChange={(event) => {
                    setSex(event.target.value);
                }}/>
                <input type = "Number" placeholder='Age...' onChange={(event) => {
                    setAge(event.target.value);
                }}/>
                <button onClick={calculateCalories}> Calculate </button>
            </div>

            <div>
                {calories}
            </div>
        </>
    );
}

export default CalorieCalculator;