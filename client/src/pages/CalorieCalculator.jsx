import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
//import { render } from "react-dom";
import UsersList from "./users_list";
import Axios from 'axios';
import styled from "styled-components";
import Select from "react-select"
//import { Model, Query } from 'mongoose';

function CalorieCalculator() {
    const [user, setUser] = useState("")
    const [diet, setDiet] = useState("")
    const [sex, setSex] = useState("");
    const [activity, setActivity] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [calories, setCalories] = useState("");
    const [age, setAge] = useState("")
    const [listOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getUsers').then((response) => {
            //setListOfUsers(response.data)
            const option = response.data.map((item)=>({
                "value": item._id,
                "label": item.name
            }))
            setListOfUsers(option)
        })
        }, []);
    const activityOptions = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' }
    ]
    const sexOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' }
    ]
    const dietOptions = [
        { value: 'bulk', label: 'Bulk' },
        { value: 'maintain', label: 'Maintain' },
        { value: 'cut', label: 'Cut' }
    ]
    var activity_level = 0;

    const calculateCalories = () => {
        var dietNum = 0;
        if(activity === "low"){
            activity_level = 1.2;
        } else if (activity === "medium"){
            activity_level = 1.5;
        }else{
            activity_level = 1.7;
        }

        if(diet === "bulk"){
            dietNum = 300;
        } else if(diet === "maintain"){
            dietNum = 0;
        } else{
            dietNum = -300;
        }

        if(sex === "female"){
            setCalories( (activity_level * (10 * weight + 6.25*height - 5*age -161)) + dietNum);
        } else {
            setCalories((activity_level *(10*weight + 6.25 * height - 5 * age + 5)) + dietNum);
        }
        /*
        Model.updateOne({name: user}, {calories: calories}, null, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Original Doc : ",docs);
            }
        });
        */
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

    const selectStyles = {
        control: (base) => ({
          ...base,
          maxHeight: 30,
          minHeight: 10,
          width: 370,
        }),
        dropdownIndicator: (base) => ({
          ...base,
          paddingTop: 0,
          paddingBottom: 0,
        }),
        clearIndicator: (base) => ({
          ...base,
          paddingTop: 0,
          paddingBottom: 0,
        }),
      };
      

    return (
        <>
        <h1>This is the Calorie Calculator!</h1>
        {/*<h2>Select a user:</h2>*/}
        {/*<UsersList /> */}

            <div>
                <input style = {{width: "370px", padding: "6px"}} type = "Number" placeholder='Height(cm)...' onChange={(event) => {
                    setHeight(event.target.value);
                }}/>
            </div>
            
            <div>
                <input style = {{width: "370px", padding: "6px"}} type = "Number" placeholder='Weight(kg)...' onChange={(event) => {
                    setWeight(event.target.value);
                }}/>
            </div>
            <div>
                <input style = {{width: "370px", padding: "6px"}} type = "Number" placeholder='Age...' onChange={(event) => {
                    setAge(event.target.value);
                }}/>
            </div>
            <div>
                <Select styles = {selectStyles} options = {activityOptions} placeholder = "Activity Level..." onChange={(event) => {
                    setActivity(event.value);
                }}/>
                <Select styles = {selectStyles} options = {sexOptions} placeholder = "Sex..." onChange={(event) => {
                    setSex(event.value);
                }}/>
                <Select styles = {selectStyles} options = {dietOptions} placeholder = "Diet Type..." onChange={(event) => {
                    setDiet(event.value);
                }}/>
                <Select styles = {selectStyles} options = {listOfUsers} placeholder = "User..." onChange={(event) => {
                    setUser(event.value);
                }}/>
                <Button inverted onClick={calculateCalories}> Calculate </Button>
            </div>

            <p>
                {"Calories Needed:  "}{Number(calories).toFixed(2)}
            </p>
        </>
    );
}

export default CalorieCalculator;