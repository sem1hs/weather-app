import { Bell, ChevronDown, MapPin, Settings } from "lucide-react";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { LocateFixed } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#0C101C] rounded-2xl py-4 px-4">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-4 text-[#177EE8]">
          <Menu opacity={0.7} cursor={"pointer"} height={20} />
          <h1 className="text-[#177EE8] font-bold text-lg">
            Semih Weather App
          </h1>
        </div>

        <div className="flex gap-1 text-[#A7ACB8]">
          <div>
            {/* Location Icon */}
            <MapPin height={20} />
          </div>
          <span>Istanbul, Turkiye</span>
        </div>
        <div className="min-w-[400px] border border-[#3A3F4B] flex justify-between text-[#848995] rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 px-3 py-2 flex-1">
            <Search height={20} />
            <input
              className="flex-1 bg-transparent outline-none placeholder-[#848995]"
              type="text"
              placeholder="Search Location"
            />
          </div>
          <div className="bg-[#1F252E] flex items-center justify-center text-[#EDF4FB]">
            <button className="cursor-pointer h-full w-full block  px-2 py-2">
              <LocateFixed height={20} />
            </button>
          </div>
        </div>
        <div>
          {/* Notification Icon */}
          <Bell className="text-[#848995]" height={20} />
        </div>
        <div>
          {/* Settings Icon */}
          <Settings className="text-[#848995]" height={20} />
        </div>
        <div className="flex items-center gap-4">
          <div>
            {/* User Image */}
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent("semih")}&background=random`}
              alt="user avatar"
              className="rounded-full w-12 h-12"
            />
          </div>
          <span>Semih Şahinoğlu</span>
          <ChevronDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
