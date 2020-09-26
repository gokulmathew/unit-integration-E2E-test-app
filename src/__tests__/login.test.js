import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

describe("Testing Login functionality", () => {
  it("Giving different type of inputs", async () => {
    render(<Login />, { wrapper: BrowserRouter });

    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
    await userEvent.type(screen.getByLabelText("Email address"), "abc@gmail");
    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
    await userEvent.type(
      screen.getByLabelText("Email address"),
      "abc@gmail.com"
    );
    expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
    userEvent.click(screen.getByText(/submit/i));

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
