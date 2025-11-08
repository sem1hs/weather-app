import { Sun } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const SunMoonRiseComponent = ({ children }: Props) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex flex-col gap-1">
        <div className="text-[#A7ACB8]">
          <Sun size={24} />
        </div>
        <span className="text-[#4973C0] opacity-80 text-sm">Sunrise</span>
        <p className="text-[#A8B1C0] text-base font-bold">5.43</p>
      </div>
      {children}
      <div className="flex flex-col gap-1">
        <div className="text-[#A7ACB8]">
          <Sun size={24} />
        </div>
        <span className="text-[#4973C0] opacity-80 text-sm">Sunrise</span>
        <p className="text-[#A8B1C0] text-base font-bold">5.43</p>
      </div>
    </div>
  );
};

export default SunMoonRiseComponent;
