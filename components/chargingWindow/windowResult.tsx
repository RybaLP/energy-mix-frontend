import { ChargingWindowDto } from "@/types/energy";

interface Props {
  data: ChargingWindowDto;
}

const formatDateTime = (iso: string) => {
  const date = new Date(iso);
  return {
    date: date.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};

export const WindowResult = ({ data }: Props) => {
  const start = formatDateTime(data.startTime);
  const end = formatDateTime(data.endTime);

  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col gap-4">
      <h3 className="text-lg font-bold text-green-800">
         Optimal Charging Window
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs text-gray-400 mb-1">Start</p>
          <p className="font-semibold text-gray-800">{start.date}</p>
          <p className="text-2xl font-bold text-green-600">{start.time}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs text-gray-400 mb-1">End</p>
          <p className="font-semibold text-gray-800">{end.date}</p>
          <p className="text-2xl font-bold text-green-600">{end.time}</p>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 shadow-sm text-center">
        <p className="text-xs text-gray-400 mb-1">Average clean energy</p>
        <p className="text-3xl font-bold text-green-600">
           {data.cleanEnergyPercentage.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};