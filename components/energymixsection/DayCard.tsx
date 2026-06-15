import { DailyEnergyMixDto } from "@/types/energy";
import { EnergyPieChart } from "./energyPieChart";

interface Props {
  data: DailyEnergyMixDto;
  label: string;
}

export const DayCard = ({ data, label }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold text-gray-800">{label}</h2>
      <p className="text-sm text-gray-500">{data.date}</p>
      <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-2">
        <span className="text-green-700 font-semibold text-lg">
           {data.cleanEnergyPercentage.toFixed(1)}% clean energy
        </span>
      </div>
      <EnergyPieChart data={data.averageGenerationMix} />
    </div>
  );
};