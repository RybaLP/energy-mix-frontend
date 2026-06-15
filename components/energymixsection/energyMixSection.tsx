"use client";

import { useEnergyMix } from "@/hooks/useEnergyMix";
import { DayCard } from "./DayCard";

const DAY_LABELS = ["Today", "Tomorrow", "Day after tomorrow"];

export const EnergyMixSection = () => {
  const { data, isLoading, isError } = useEnergyMix();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 animate-pulse">Loading energy mix...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">Failed to load energy mix data.</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        🇬🇧 UK Energy Mix
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((day, index) => (
          <DayCard key={day.date} data={day} label={DAY_LABELS[index]} />
        ))}
      </div>
    </section>
  );
};