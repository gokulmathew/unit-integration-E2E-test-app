import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../pages/Login";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Testing Disabled state", () => {
  it("Giving different type of inputs", async () => {
    render(<Login />, { wrapper: MemoryRouter });

    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
    await userEvent.type(screen.getByLabelText("Email address"), "abc@gmail");
    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
    await userEvent.type(
      screen.getByLabelText("Email address"),
      "abc@gmail.com"
    );
    expect(screen.getByRole("button", { name: /submit/i })).not.toBeDisabled();

    fireEvent.click(screen.getByText(/submit/i));
    screen.getByText(/loading/i);
  });
});
