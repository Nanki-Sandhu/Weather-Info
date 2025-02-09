import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.18,
        humidity: 64,
        temp: 24.05,
        tempMax: 24.05,
        tempMin: 24.05,
        weather: "haze"
    }
    )
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </>
    )
}