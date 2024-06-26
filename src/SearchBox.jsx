//Step 1. Created the form- Input box(use state, value,onchange)
//Step 2. Fetched the Weather API- Created function getWeatherInfo
//Step 3. Rendering the Information

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors } from '@mui/material';


export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "6f0dae4e06d2161ef25d046fa93bb302";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);  //this will run the API in query string we need to pass city
      let jsonResponse = await response.json();
      // console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description
      }
      return result;
    } catch (err) {
      throw err;
    }

  }

  let handleChange = (event) => {
    setCity(event.target.value);
  }
  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required /><br></br><br></br>
        <Button variant="contained" type='submit'>
          Send
        </Button>
        {error&&<p style={{color:"red"}}>No Such place exist in our API</p>}
      </form>
    </>
  )
}