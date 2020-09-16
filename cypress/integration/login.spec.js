import { inputVariables } from "./constants";

describe("Email Functionality", () => {
  it("Enter email and move to next page", () => {
    cy.visit("/");
    cy.focused().type(inputVariables.emailToType);
    cy.contains("Continue").click();
    const infoRegex = new RegExp(
      "welcome [a-z !]+" + inputVariables.emailToType,
      "i"
    );
    cy.contains(infoRegex);
  });
});
