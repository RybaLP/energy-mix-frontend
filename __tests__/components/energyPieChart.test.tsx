import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import {EnergyPieChart} from "../../components/energymixsection/energyPieChart";

vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  PieChart: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Pie: ({ data }: { data: { fuel: string; perc: number }[] }) => (
    <div>
      {data.map((d) => (
        <div key={d.fuel} data-testid={`slice-${d.fuel}`}>
          {d.fuel}
        </div>
      ))}
    </div>
  ),
  Cell: () => <div />,
  Tooltip: () => <div />,
  Legend: () => <div />,
}));

const mockData = [
  { fuel: "wind", perc: 25.0 },
  { fuel: "solar", perc: 10.0 },
  { fuel: "gas", perc: 65.0 },
];

describe("EnergyPieChart", () => {
  it("should render without crashing", () => {
    render(<EnergyPieChart data={mockData} />);
  });

  it("should render a slice for each fuel type", () => {
    render(<EnergyPieChart data={mockData} />);

    expect(screen.getByTestId("slice-wind")).toBeInTheDocument();
    expect(screen.getByTestId("slice-solar")).toBeInTheDocument();
    expect(screen.getByTestId("slice-gas")).toBeInTheDocument();
  });
});