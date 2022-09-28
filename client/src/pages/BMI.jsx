import React from 'react';
import { useState, useEffect } from 'react';
//import { render } from "react-dom";
import UsersList from "./users_list";
import Axios from 'axios';

function BMI() {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState("");

    const calculateBMI = () => {
        setBMI((weight / (height*height)));
    }

    return (
        <><h1>This is the BMI Calculator!</h1>

            <div>
                <input type = "Number" placeholder='Height(m)...' onChange={(event) => {
                    setHeight(event.target.value);
                }}/>
                <input type = "Number" placeholder='Weight(kg)...' onChange={(event) => {
                    setWeight(event.target.value);
                }}/>
                <button onClick={calculateBMI}> Calculate </button>
            </div>
            <div>
                {"BMI:  "}{bmi}
            </div>
           
        </>
    );
}

export default BMI;