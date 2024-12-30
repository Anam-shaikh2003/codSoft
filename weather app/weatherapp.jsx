import Search from "./search";
import Info from './info';
import { useState } from "react";

export default function Weatherapp(){
    let [weather,setweather] = useState({
        city:"Delhi",
        feelslike: 13.97,
        humidity: 94,
        temp: 14.05,
        tempmax: 14.05,
        tempmin: 14.05,
        weather:"haze"
    })

    let update=(newinfo)=>{
        setweather(newinfo)
    }
    return(
        <div>
            <h3>WEARTHER APP</h3>
            <Search update={update}/>
            <Info info={weather}/>
        </div>
    )
}