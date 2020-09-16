const emailToType = "abc@gmail.com";
const nameToType = "Ashwin";
const commentToType = "Nice work";

describe("Testing Full functionality", () => {
  it("Entering email", () => {
    cy.visit("/");
    cy.focused().type(emailToType);
    cy.contains("Continue").click();
  });

  it("posting comments", () => {
    const infoRegex = new RegExp("welcome [a-z !]+" + emailToType, "i");
    cy.contains(infoRegex);
    cy.get("[data-cy=name_data_cy]").type(nameToType);
    cy.contains("Post").click();

    cy.get("#comment_input").should("be.focused");
    cy.get("#comment_input").type(commentToType);
  });

  it("testing alert raised", () => {
    const mockAlertFunction = cy.stub();
    cy.on("window:alert", mockAlertFunction);

    cy.contains("Post")
      .click()
      .then(() => {
        expect(mockAlertFunction).to.be.calledWith(
          `email:${emailToType}\n name:${nameToType}\n comments:${commentToType}`
        );
      });
  });
});

describe("Testing API call", () => {
  before(() => {
    cy.visit("/users");
  });
  it("fetch API data", () => {
    cy.contains(/Please click [a-zA-Z]+ button/);

    ///Note: If data coming from API, create
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
