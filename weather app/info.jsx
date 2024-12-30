import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Info({info}){
    const info_url ="https://media.istockphoto.com/id/1434970744/photo/cyclone-amphan-2020-cloud-map-bay-of-bengal-3d-render-color.webp?a=1&b=1&s=612x612&w=0&k=20&c=KICxogMG48IFLCm8zHn5nQj6OeCtUTVefQDlExJZXHE="
    const hot_url="https://plus.unsplash.com/premium_photo-1663127675069-2a52f0eb9c75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3Vubnl8ZW58MHx8MHx8fDA%3D"
    const cold_url="https://images.unsplash.com/photo-1480775661506-541bb9d526b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGR8ZW58MHx8MHx8fDA%3D"
    const info_url2="https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const rain_url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          info.humidity>80
          ?rain_url
          :info.temp>15
          ?hot_url
          :cold_url
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{
           info.humidity>80
           ?<ThunderstormIcon/>
           :info.temp>15
           ?<WbSunnyIcon/>
           :<AcUnitIcon/>
         }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p><b>temperature={info.temp}&deg;C</b></p>
          <p><b>humidity={info.humidity}</b></p>
          <p><b>min temp ={info.tempmin}&deg;C</b></p>
          <p><b>max temp ={info.tempmax}&deg;C</b></p>
          <p><b>The weather can describe as {info.weather} feels like {info.feelslike}&deg;C</b></p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}