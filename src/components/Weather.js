import React from "react";
import { MdLocationOn } from "react-icons/md";
import { WiHumidity, WiThermometer, WiDaySunny } from "react-icons/wi";

const Weather = props => (
    <div className="weather__info">
        {
            props.city && props.country && <p className="weather__key"> <MdLocationOn /> Location: 
                <span className="weather__value"> {props.city}, {props.country}</span>
            </p>
        }
        {
            props.temperature && <p className="weather__key"> <WiThermometer /> Temperature: 
                <span className="weather__value"> {props.temperature}°C</span>
            </p>
        }
        {
            props.humidity && <p className="weather__key"> <WiHumidity /> Humidity: 
                <span className="weather__value"> {props.humidity}%</span>
            </p>
        }
        {
            props.description && props.icon && <p className="weather__key"> <WiDaySunny /> Conditions: 
                <span className="weather__value"> {props.description} 
                    <img src ={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather img"></img>
                </span>
            </p>
        }
        {
            props.error && <p className="weather__error">{props.error}</p>
        }
    </div>
);

 export default Weather;