"use client";

import { useChargingStore } from "@/store/chargingStore";
import { useChargingWindow } from "@/hooks/useChargingWindow";
import {WindowResult} from "./windowResult";
import {HoursSelector} from "./hoursSelector";

export const ChargingWindowSection = () => {
  const { selectedHours } = useChargingStore();
  const { data, isLoading, isError } = useChargingWindow(selectedHours);

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-gray-800">
         Optimal EV Charging Window
      </h2>
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6">
        <HoursSelector />
        {isLoading && (
          <p className="text-gray-500 animate-pulse">
            Finding optimal window...
          </p>
        )}
        {isError && (
          <p className="text-red-500">
            Failed to find optimal charging window.
          </p>
        )}
        {data && <WindowResult data={data} />}
      </div>
    </section>
  );
};