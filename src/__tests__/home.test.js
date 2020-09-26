import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
const email = "abc@gmail.com";
const name = "Akash";
const comments = "Nice work";

//window.alert cannot be tested in test file, so we are mocking it
const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
beforeEach(() => {
  render(
    <MemoryRouter initialEntries={[`/form-submit/${email}`]}>
      <Route path={`/form-submit/:data`}>
        <Home />
      </Route>
    </MemoryRouter>
  );
});

test("when submit without filling form ", async () => {
  expect(screen.getByLabelText("Name")).toHaveAttribute("required");
  expect(screen.getByLabelText("Comments")).toHaveAttribute("required");

  fireEvent.click(screen.getByRole("button", { name: "Post" }));
  expect(alertSpy).toBeCalledWith("Please fill inputs");
});

test("submit form after filling form", async () => {
  screen.getByText(email);
  await userEvent.type(screen.getByLabelText("Name"), name);
  await userEvent.type(screen.getByLabelText("Comments"), comments);
  fireEvent.click(screen.getByRole("button", { name: "Post" }));

  expect(alertSpy).toBeCalledWith(
    `email:${email}\n name:${name}\n comments:${comments}`
  );
  // to restore the alert that is mocked
  window.alert.mockRestore();
});

test("input file submit", () => {
  //https://codesandbox.io/s/react-testing-library-demo-v5h0o?file=/src/__tests__/test.js
  //https://github.com/testing-library/react-testing-library/issues/93
});
