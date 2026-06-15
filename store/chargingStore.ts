import { create } from "zustand";

interface ChargingStore {
  selectedHours: number;
  setSelectedHours: (hours: number) => void;
}

export const useChargingStore = create<ChargingStore>((set) => ({
  selectedHours: 1,
  setSelectedHours: (hours) => set({ selectedHours: hours }),
}));