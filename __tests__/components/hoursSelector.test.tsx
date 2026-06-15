import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import { HoursSelector } from "../../components/chargingWindow/hoursSelector";
import { useChargingStore } from "@/store/chargingStore";
import { render, screen, fireEvent } from "@testing-library/react";


describe("HoursSelector", () => {
  beforeEach(() => {
    useChargingStore.setState({ selectedHours: 1 });
  });

  it("should render the slider", () => {
    render(<HoursSelector />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("should display initial selected hours", () => {
    render(<HoursSelector />);
    expect(screen.getByText(/Charging duration: 1h/)).toBeInTheDocument();
  });

  it("should display all hour labels", () => {
    render(<HoursSelector />);
    [1, 2, 3, 4, 5, 6].forEach((h) => {
      expect(screen.getByText(`${h}h`)).toBeInTheDocument();
    });
  });

it("should update store when slider changes", async () => {
  render(<HoursSelector />);
  const slider = screen.getByRole("slider");

  fireEvent.change(slider, { target: { value: "2" } });

  expect(useChargingStore.getState().selectedHours).toBe(2);
});
});