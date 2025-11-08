import { useEffect, useState } from "react";

interface Props {
  moonrise?: string;
  moonset?: string;
  currentTime?: string;
}

const MoonPath = ({
  moonrise = "19:45",
  moonset = "06:15",
  currentTime,
}: Props) => {
  const [time, setTime] = useState(currentTime || "");
  const [progress, setProgress] = useState(0);

  const cx = 180,
    cy = 150,
    rx = 120,
    ry = 100;

  const parseHM = (hm: string) => {
    const [h, m] = hm.split(":").map(Number);
    return h * 60 + m;
  };

  const formatHM = (mins: number) => {
    const h = String(Math.floor(mins / 60)).padStart(2, "0");
    const m = String(mins % 60).padStart(2, "0");
    return `${h}:${m}`;
  };

  const updateProgress = () => {
    const moonriseMin = parseHM(moonrise);
    const moonsetMin = parseHM(moonset);

    let tMin;
    if (!time) {
      const now = new Date();
      tMin = now.getHours() * 60 + now.getMinutes();
      setTime(formatHM(tMin));
    } else {
      tMin = parseHM(time);
    }

    const total = moonsetMin - moonriseMin;
    let p = (tMin - moonriseMin) / total;
    p = Math.max(0, Math.min(1, p));
    setProgress(p);
  };

  useEffect(() => {
    updateProgress();
  }, [time, moonrise, moonset]);

  const angleDeg = 180 * (1 - progress);
  const rad = (angleDeg * Math.PI) / 180;
  const x = cx + rx * Math.cos(rad);
  const y = cy - ry * Math.sin(rad);

  return (
    <div className="flex justify-center items-center w-full">
      <svg viewBox="0 0 360 200" width="65%">
        {/* Ayın sol tarafı - düz mavi çizgi */}
        <path
          d={`M${cx - rx} ${cy} A${rx} ${ry} 0 0 1 ${x} ${y}`}
          stroke="#60A5FA" // açık mavi
          strokeWidth="6"
          fill="none"
        />

        {/* Ayın sağ tarafı - kesikli mavi çizgi */}
        <path
          d={`M${x} ${y} A${rx} ${ry} 0 0 1 ${cx + rx} ${cy}`}
          stroke="#60A5FA"
          strokeWidth="6"
          fill="none"
          strokeDasharray="4 6"
        />

        {/* Ay */}
        <circle cx={x} cy={y} r="8" fill="#60A5FA" strokeWidth="6" />

        {/* Zaman etiketleri */}
        <text
          x={cx - rx}
          y="172"
          textAnchor="middle"
          fontSize="16"
          fill="#94A3B8"
        >
          {moonrise}
        </text>
        <text
          x={cx}
          y={cy - ry - 10}
          textAnchor="middle"
          fontSize="16"
          fill="#94A3B8"
        >
          {formatHM((parseHM(moonrise) + parseHM(moonset)) / 2)}
        </text>
        <text
          x={cx + rx}
          y="172"
          textAnchor="middle"
          fontSize="16"
          fill="#94A3B8"
        >
          {moonset}
        </text>
      </svg>
    </div>
  );
};

export default MoonPath;
