import CurrentWeatherTab from "./CurrentWeatherTab";
import WeatherStatsTab from "./WeatherStatsTab";
import WeatherSummaryTab from "./WeatherSummaryTab";

const WeatherTab = () => {
  return (
    <div className="col-span-3">
      <CurrentWeatherTab />
      <WeatherStatsTab />
      <WeatherSummaryTab />
    </div>
  );
};

export default WeatherTab;
