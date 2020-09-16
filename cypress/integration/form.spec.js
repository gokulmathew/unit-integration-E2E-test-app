import { inputVariables } from "./constants";
const nameToType = "Ashwin";
const commentToType = "Nice work";

describe("Test Form", () => {
  before(() => {
    cy.visit(`/form-submit/${inputVariables.emailToType}`);
  });
  it("post comments", () => {
    cy.get("[data-cy=name_data_cy]").type(nameToType);
    cy.contains("Post").click();

    cy.get("#comment_input").should("be.focused");

    cy.get("#comment_input").type(commentToType);
  });

  it("test alert raised", () => {
    const mockAlertFunction = cy.stub();
    cy.on("window:alert", mockAlertFunction);

    cy.contains("Post")
      .click()
      .then(() => {
        expect(mockAlertFunction).to.be.calledWith(
          `email:${inputVariables.emailToType}\n name:${nameToType}\n comments:${commentToType}`
        );
      });
  });
});
