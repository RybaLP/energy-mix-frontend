import { useQuery } from "@tanstack/react-query";
import { fetchChargingWindow } from "@/lib/api";

export const useChargingWindow = (hours: number) => {
  return useQuery({
    queryKey: ["chargingWindow", hours],
    queryFn: () => fetchChargingWindow(hours),
    staleTime: 1000 * 60 * 5,
    enabled: hours >= 1 && hours <= 6,
  });
};