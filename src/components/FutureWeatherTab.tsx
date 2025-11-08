import {
  Link,
  RegisteredRouter,
  useParams,
  ValidateLinkOptions,
} from "@tanstack/react-router";
import { useState } from "react";
import clsx from "clsx";
import WeatherTodayTab from "./WeatherTodayTab";

type LinkOptions = {
  label: string;
  linkOptions: ValidateLinkOptions<RegisteredRouter>;
};

const LinkItems: LinkOptions[] = [
  {
    label: "Today",
    linkOptions: {
      to: "/weather/$period",
      params: { period: "today" },
      activeProps: { className: "text-white opacity-90 font-semibold" },
    },
  },
  {
    label: "Tomorrow",
    linkOptions: {
      to: "/weather/$period",
      params: { period: "tomorrow" },
      activeProps: { className: "text-white opacity-90 font-semibold" },
    },
  },
  {
    label: "10 Days",
    linkOptions: {
      to: "/weather/$period",
      params: { period: "10days" },
      activeProps: { className: "text-white opacity-90 font-semibold" },
    },
  },
];

const FutureWeatherTab = () => {
  const params = useParams({ strict: false });
  const [active, setActive] = useState<string>("today");

  return (
    <div className="col-span-2 bg-[#0C101C] rounded-2xl py-6 px-5">
      <ul className="flex gap-3 text-[#848995]">
        {LinkItems.map((option) => {
          const isActive = active === option.linkOptions.params!.period;

          return (
            <li key={option.label}>
              <Link
                {...option.linkOptions}
                className={clsx(
                  "relative after:block after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-[#848995] after:transition-all after:duration-300 hover:after:w-full",
                  isActive
                    ? "text-white opacity-90 font-semibold after:w-full"
                    : "after:w-0"
                )}
                onClick={() => setActive(option.linkOptions.params!.period)}
              >
                {option.label}
              </Link>
            </li>
          );
        })}
      </ul>
      {params.period === "today" && <WeatherTodayTab />}
    </div>
  );
};

export default FutureWeatherTab;
