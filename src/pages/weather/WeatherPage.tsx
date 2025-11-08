import FutureWeatherTab from "@/components/FutureWeatherTab";
import WeatherTab from "@/components/WeatherTab";
import { useParams } from "@tanstack/react-router";

const WeatherPage = () => {
  const { period } = useParams({ strict: false });

  return (
    <section className="mt-8">
      <div className="grid grid-cols-5 gap-8">
        <WeatherTab />
        <FutureWeatherTab period={period} />
      </div>
    </section>
  );
};

export default WeatherPage;
