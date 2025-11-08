import WeatherStats from "./WeatherStats";

const WeatherStatsTab = () => {
  return (
    <div className="grid grid-cols-3 mt-6 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <WeatherStats key={i} />
      ))}
    </div>
  );
};

export default WeatherStatsTab;
