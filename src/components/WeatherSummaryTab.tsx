import { Sun } from "lucide-react";
import SunPath from "./SunPath";
import MoonPath from "./MoonPath";
import SunMoonRiseComponent from "./SunMoonRiseComponent";

const WeatherSummaryTab = () => {
  return (
    <div className="bg-[#0C101C] rounded-2xl py-5 px-6 mt-6">
      <span className="text-[#A7ACB8] mb-4 inline-block">
        Soon & Moon Summary
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col justify-around gap-3">
          <div className="flex gap-4 items-center">
            <div className="text-[#A7ACB8]">
              <Sun size={32} />
            </div>
            <div>
              <span className="text-[#4973C0] opacity-80">Air Quality</span>
              <p className="text-[#A8B1C0] text-xl font-bold">156</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-[#A7ACB8]">
              <Sun size={32} />
            </div>
            <div>
              <span className="text-[#4973C0] opacity-80">Air Quality</span>
              <p className="text-[#A8B1C0] text-xl font-bold">156</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-3">
          <SunMoonRiseComponent>
            <SunPath />
          </SunMoonRiseComponent>
          <SunMoonRiseComponent>
            <MoonPath />
          </SunMoonRiseComponent>
        </div>
      </div>
    </div>
  );
};

export default WeatherSummaryTab;
