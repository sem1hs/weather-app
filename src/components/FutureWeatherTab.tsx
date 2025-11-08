import { Link } from "@tanstack/react-router";

interface Props {
  period?: string;
}

const FutureWeatherTab = ({ period }: Props) => {
  return (
    <div className="col-span-2 bg-[#0C101C] rounded-2xl py-6 px-5">
      <ul className="flex gap-3 text-[#848995]">
        <li>
          <Link
            to="/weather/$period"
            params={{ period: "today" }}
            activeProps={{
              className: "text-white opacity-90 font-semibold",
            }}
          >
            Today
          </Link>
        </li>
        <li>
          <Link
            to="/weather/$period"
            params={{ period: "tomorrow" }}
            activeProps={{
              className: "text-white opacity-90 font-semibold",
            }}
          >
            Tomorrow
          </Link>
        </li>
        <li>
          <Link
            to="/weather/$period"
            params={{ period: "10days" }}
            activeProps={{
              className: "text-white opacity-90 font-semibold",
            }}
          >
            10 Days
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FutureWeatherTab;
