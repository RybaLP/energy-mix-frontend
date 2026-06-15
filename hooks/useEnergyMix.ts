import { useQuery } from "@tanstack/react-query";
import { fetchEnergyMix } from "@/lib/api";

export const useEnergyMix = () => {
  return useQuery({
    queryKey: ["energyMix"],
    queryFn: fetchEnergyMix,
    staleTime: 1000 * 60 * 5,
  });
};