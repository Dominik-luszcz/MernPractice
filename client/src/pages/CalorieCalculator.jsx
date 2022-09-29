import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
//import { render } from "react-dom";
import UsersList from "./users_list";
import Axios from 'axios';
import styled from "styled-components";
import Select from "react-select"

function CalorieCalculator() {
    const [sex, setSex] = useState("");
    const [activity, setActivity] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [calories, setCalories] = useState("");
    const [age, setAge] = useState("")
    const activityOptions = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' }
    ]
    var activity_level = 0;

    const calculateCalories = () => {
        if(activityOptions === "low"){
            activity_level = 1.2;
        } else if (activityOptions === "medium"){
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

    const Button = styled.button`
        background: ${props => props.inverted ? "lightcoral" : "black"};
        color: ${props => props.inverted ? "black" : "lightcoral"};
        border: 2px solid black;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;

        &:hover {
            opacity: 0.9;
        }
    `;
    /*
    const Wrapper = styled.section`
        padding: 0.5em;
        background: lightcoral;
    `;
    */

    return (
        <>
        <h1>This is the Calorie Calculator!</h1>
        {/*<h2>Select a user:</h2>*/}
        {/*<UsersList /> */}

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
                <Select options = {activityOptions}/>
                <Button inverted onClick={calculateCalories}> Calculate </Button>
            </div>

            <p>
                {"BMR:  "}{calories}
            </p>
            <p>
                {"Bulk:  "}{calories + 300}
            </p>
            <p>
                {"Cut:  "}{calories - 300}
            </p>
        </>
    );
}

export default CalorieCalculator;