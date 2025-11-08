import { useEffect } from "react";

const API_KEY = "061d39801039d0fca01c99a7493aa14e";
const lat = 40.7128;
const lon = -74.006;

const WeatherTodayTab = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();

      console.log(data);
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default WeatherTodayTab;
