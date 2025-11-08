const CurrentWeatherTab = () => {
  return (
    <div className="bg-[#0C101C] rounded-2xl py-6 px-5">
      <span className="inline-block text-[#848995] opacity-50">
        Current Weather
      </span>
      <h1 className="text-white text-lg">{new Date().toLocaleTimeString()}</h1>
      {/* Hava Durumu */}
      <div className="mb-4 flex items-center">
        <img src="https://openweathermap.org/img/wn/02d@2x.png" />
        <div className="flex gap-1.5 mr-8">
          <p className="text-white text-4xl">12</p>
          <span className="text-[#4973C0] text-base">°C</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#4973C0]">Sun</span>
          <span className="text-[#A7ACB8]">Feels Like 35</span>
        </div>
      </div>
      <p className="text-[#A7ACB8] text-lg">
        There will be mostly sunny skies. The high will be 35
      </p>
    </div>
  );
};

export default CurrentWeatherTab;
