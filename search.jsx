import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css";
import { useState } from 'react';

export default function Search({update}) {
    let [city,setCity]=useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d180d4f97b6f60737ea3ea72e4ab75e0";

    let getweather =async()=>{
         let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
         let resjson = await response.json();
         console.log(resjson);
         let result={
            city:city,
            temp:resjson.main.temp,
            tempmin:resjson.main.temp_min,
            tempmax: resjson.main.temp_max,
            humidity: resjson.main.humidity,
            feelslike : resjson.main.feels_like,
         }
         console.log(result)
         return result;
    }
    
    let handler=(event)=>{
          setCity(event.target.value)
    }

    let handlesubmit=async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo= await getweather();
        update(newinfo);
    }
    return(
        <div className="search">
            <form onSubmit={handlesubmit}>
                <TextField id="city" label="city-name" variant="outlined" required 
                value={city}
                onChange={handler}/>
                <br></br><br></br>
                <Button variant="contained" type="sumbit" >Search</Button>
            </form>
        </div>
    )
    
}