import React from "react";
import Home from "./Home"

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input text="text" name="city" placeholder="City..."></input>
        <input text="text" name="country" placeholder="Country..."></input>
        <button>Get Weather</button>
    </form>
);
 export default Form;