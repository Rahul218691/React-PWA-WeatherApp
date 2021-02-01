import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '6aed2c0b8acd69d34cec1573f2cb228f';

export const fetchWeather = async (query) =>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });

    return data;
} 