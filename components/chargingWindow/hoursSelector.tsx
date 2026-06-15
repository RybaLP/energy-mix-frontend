"use client";

import { useChargingStore } from "@/store/chargingStore";

export const HoursSelector = () => {
  const { selectedHours, setSelectedHours } = useChargingStore();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 font-medium">
        Charging duration: {selectedHours}h
      </label>
      <input
        type="range"
        min={1}
        max={6}
        step={1}
        value={selectedHours}
        onChange={(e) => setSelectedHours(Number(e.target.value))}
        className="w-full accent-green-500"
      />
      <div className="flex justify-between text-xs text-gray-400">
        {[1, 2, 3, 4, 5, 6].map((h) => (
          <span key={h}>{h}h</span>
        ))}
      </div>
    </div>
  );
};