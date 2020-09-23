import { render, screen, waitForElement } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Users from "../pages/Users";

test("checking initial states ", () => {
  render(<Users />);
  expect(screen.getByText(/Please click/)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Get Data" })).toBeEnabled();
  expect(screen.getByRole("button", { name: "Clear" })).toBeDisabled();
});

describe("testing functionality", () => {
  beforeEach(async () => {
    render(<Users />);
    userEvent.click(screen.getByRole("button", { name: "Get Data" }));
    await waitForElement(() => {
      return screen.getAllByTestId("user");
    });
  });

  test("get the api data", async () => {
    expect(screen.getAllByTestId("user").length).toBe(10);
    expect(screen.getByRole("button", { name: "Clear" })).toBeEnabled();
  });
  test("clear the states", () => {
    userEvent.click(screen.getByRole("button", { name: "Clear" }));
    expect(screen.queryByTestId("user")).not.toBeInTheDocument();
  });
});
