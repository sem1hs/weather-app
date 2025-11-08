import WeatherPage from "@/pages/weather/WeatherPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/weather/$period/")({
  component: WeatherPage,
});
