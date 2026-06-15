"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, PieLabelRenderProps } from "recharts";
import { GenerationMix } from "@/types/energy";

const COLORS = [
  "#22c55e", "#3b82f6", "#f59e0b", "#ef4444",
  "#8b5cf6", "#06b6d4", "#f97316", "#ec4899",
  "#14b8a6", "#a855f7",
];

interface Props {
  data: GenerationMix[];
}

const renderLabel = ({ name, value }: PieLabelRenderProps) => {
  if (!name || value === undefined) return "";
  return `${name} ${Number(value).toFixed(1)}%`;
};

export const EnergyPieChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="perc"
          nameKey="fuel"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={renderLabel}
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
        formatter={(value) =>
            [`${Number(value ?? 0).toFixed(2)}%`]
        }
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};