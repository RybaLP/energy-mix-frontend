import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { DayCard } from "../../components/energymixsection/DayCard";

vi.mock("../../components/energymixsection/energyPieChart", () => ({
  EnergyPieChart: () => <div data-testid="pie-chart" />,
}));

const mockData = {
  date: "2026-06-15",
  averageGenerationMix: [
    { fuel: "wind", perc: 25.0 },
    { fuel: "solar", perc: 10.0 },
  ],
  cleanEnergyPercentage: 35.0,
};

describe("DayCard", () => {
  it("should render the label", () => {
    render(<DayCard data={mockData} label="Today" />);
    expect(screen.getByText("Today")).toBeInTheDocument();
  });

  it("should render the date", () => {
    render(<DayCard data={mockData} label="Today" />);
    expect(screen.getByText("2026-06-15")).toBeInTheDocument();
  });

  it("should render clean energy percentage", () => {
    render(<DayCard data={mockData} label="Today" />);
    expect(screen.getByText(/35.0% clean energy/)).toBeInTheDocument();
  });

  it("should render the pie chart", () => {
    render(<DayCard data={mockData} label="Today" />);
    expect(screen.getByTestId("pie-chart")).toBeInTheDocument();
  });
});