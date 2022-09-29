import '../App.css';
import React from 'react';
import { useState, useEffect } from 'react';
//import { render } from "react-dom";
import UsersList from "./users_list";
import Axios from 'axios';
import styled from "styled-components";

function BMI() {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState("");

    const calculateBMI = () => {
        setBMI((weight / (height*height)));
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
        <><h1>This is the BMI Calculator!</h1>

            <div>
                <input type = "Number" placeholder='Height(m)...' onChange={(event) => {
                    setHeight(event.target.value);
                }}/>
                <input type = "Number" placeholder='Weight(kg)...' onChange={(event) => {
                    setWeight(event.target.value);
                }}/>
                <Button inverted onClick={calculateBMI}> Calculate </Button>
            </div>
            <div>
                {"BMI:  "}{bmi}
            </div>
           
        </>
    );
}

export default BMI;