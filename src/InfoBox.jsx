import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL="https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM=";
    const COLD_URL="https://media.istockphoto.com/id/157565659/photo/thermometer-behind-the-frozen-window.jpg?s=2048x2048&w=is&k=20&c=YCJB8TmRkDAOjqAh0KnhJJohEcKWMHD5iw-xHcnziq8=";
    const RAINY_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";

    return (
        <>
            <hr></hr>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80?RAINY_URL:info.temp>15?HOT_URL:COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} &nbsp; {info.humidity>80?<ThunderstormIcon/ >:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div> Feels_Like: {info.weather}</div>
                        <div> Temperature: {info.temp}&deg;C</div>
                        <div> Humidity: {info.humidity}</div>
                        <div> Min Temp: {info.tempMin}&deg;C</div>
                        <div> Max Temp: {info.tempMax}&deg;C</div>
                        <div> Feels_Like: {info.feelsLike}&deg;C</div>
                    </Typography>
                </CardContent>

            </Card>
        </>
    )
}