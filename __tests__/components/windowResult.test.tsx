import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {WindowResult} from "../../components/chargingWindow/windowResult";

const mockData = {
  startTime: "2026-06-16T10:00:00Z",
  endTime: "2026-06-16T13:00:00Z",
  cleanEnergyPercentage: 64.5,
};

describe("WindowResult", () => {
  it("should render optimal charging window title", () => {
    render(<WindowResult data={mockData} />);
    expect(screen.getByText(/Optimal Charging Window/)).toBeInTheDocument();
  });

  it("should render start and end labels", () => {
    render(<WindowResult data={mockData} />);
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("End")).toBeInTheDocument();
  });

  it("should render clean energy percentage", () => {
    render(<WindowResult data={mockData} />);
    expect(screen.getByText(/64.5%/)).toBeInTheDocument();
  });

  it("should render average clean energy label", () => {
    render(<WindowResult data={mockData} />);
    expect(screen.getByText(/Average clean energy/)).toBeInTheDocument();
  });
});