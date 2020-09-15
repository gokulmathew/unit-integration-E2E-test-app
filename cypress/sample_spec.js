/// <reference types="Cypress" />
beforeEach(() => {
  cy.visit("/");
  cy.get("#input_email").type("ghss@we");
  cy.get("#input_password").type("abc@123");
});
describe("Login Form", () => {
  it("check for validations", () => {
    cy.get("#input_email").invoke("val").should("have.length.above", 6);
    cy.get("[data-cy=submit]").click();
  });

  it("move to another page", () => {
    cy.visit("/home-page/ghss@weabc@123");
  });
});
