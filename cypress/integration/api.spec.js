describe("Testing API call", () => {
  before(() => {
    cy.visit("/users");
  });
  it("fetch API data", () => {
    cy.contains(/Please click [a-zA-Z]+ button/);
    cy.server();
    cy.route({
      url: "https://jsonplaceholder.typicode.com/users",
    }).as("GET_DATA");
    cy.get("#get_data_btn").click();

    cy.wait("@GET_DATA");
    // cy.get("li").should("have.length", 10);

    cy.get("ul")
      .should("exist")
      .then(() => {
        cy.get("li").should("have.length", 10);
      });

    cy.get(".btn-secondary").click();
    cy.get("li").should("not.exist");
    cy.contains(/Please click [a-zA-Z]+ button/);
  });
});
