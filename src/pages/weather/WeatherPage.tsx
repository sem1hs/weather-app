import FutureWeatherTab from "@/components/FutureWeatherTab";
import WeatherTab from "@/components/WeatherTab";

const WeatherPage = () => {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-5 gap-8">
        <WeatherTab />
        <FutureWeatherTab />
      </div>
    </section>
  );
};

export default WeatherPage;
