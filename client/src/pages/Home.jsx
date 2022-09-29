import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import styled from "styled-components";

function Home()   {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [calories, setCalories] = useState("")

    useEffect(() => {
    Axios.get('http://localhost:3001/getUsers').then((response) => {
        setListOfUsers(response.data)
    })
    }, []);

    const createUser = () => {
        setCalories(0);
        Axios.post('http://localhost:3001/createUser', {name, age, username, password, calories}).then((response) => {
        setListOfUsers([...listOfUsers, {name, age, username, password, calories}])
    })
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

    return (
    <div className="App">
        <div className="userDisplay">
        <h1>This is the Home Page</h1>
        <h2>You can add users here!</h2>
            {listOfUsers.map((user) => {
                return (
                <div>
                    <h3>Name: {user.name}</h3>
                    <h3>Username: {user.username}</h3>
                    <h3>Age: {user.age}</h3>
                    <h3>Calories: {user.calories}</h3>
                </div>
                );
            })}
            </div>

            <div>
            <input type = "text" placeholder='Name...' onChange={(event) => {
                setName(event.target.value);
            }}/>
            <input type = "text" placeholder='Username...' onChange={(event) => {
                setUsername(event.target.value);
            }}/>
            <input type = "text" placeholder='Password...' onChange={(event) => {
                setPassword(event.target.value);
            }}/>
            <input type = "Number" placeholder='Age...' onChange={(event) => {
                setAge(event.target.value);
            }}/>
            <Button inverted onClick={createUser}> Calculate </Button>
            </div>
    </div>
    );
}


export default Home;