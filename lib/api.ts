import axios from "axios";
import { DailyEnergyMixDto, ChargingWindowDto } from "@/types/energy";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchEnergyMix = async (): Promise<DailyEnergyMixDto[]> => {
  const { data } = await api.get("/api/energy-mix");
  return data;
};

export const fetchChargingWindow = async (
  hours: number
): Promise<ChargingWindowDto> => {
  const { data } = await api.get("/api/optimal-window", {
    params: { hours },
  });
  return data;
};