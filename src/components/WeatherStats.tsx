import { CloudCheck } from "lucide-react";

const WeatherStats = () => {
  return (
    <div className="bg-[#0C101C] rounded-2xl py-6 px-6 flex gap-4">
      <div className="text-[#A7ACB8]">
        <CloudCheck />
      </div>

      <div>
        <span className="text-[#848995] opacity-80">Air Quality</span>
        <p className="text-[#A8B1C0] text-xl font-bold">156</p>
      </div>
    </div>
  );
};

export default WeatherStats;
