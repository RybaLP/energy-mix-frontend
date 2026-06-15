export interface GenerationMix {
  fuel: string;
  perc: number;
}

export interface DailyEnergyMixDto {
  date: string;
  averageGenerationMix: GenerationMix[];
  cleanEnergyPercentage: number;
}

export interface ChargingWindowDto {
  startTime: string;
  endTime: string;
  cleanEnergyPercentage: number;
}