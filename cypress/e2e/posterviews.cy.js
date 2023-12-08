describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("Poster error initial view check", ()=>{
  it("should be able to handle an error with the view", ()=>{
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode:500
    })
    cy.visit("http://localhost:3000/")
  })
})

describe("Poster Initial View Check", () => {
  it("should be able to see the main header on the home page", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".header-title").should("contain", "Rancid Tomatillos");
  });
});

describe("Clicking on First Poster", () => {
  it("should display 'Black Adam' when the first poster is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".Poster").first().as("firstPoster"); // Alias the first poster
    cy.get("@firstPoster").should("exist"); // Check if the first poster exists
    cy.get("@firstPoster").click(); // Click on the first poster
    cy.get(".Poster-Back h2").should("contain", "Black Adam"); // Check for the title 'Black Adam'
  });
});

describe("Clicking on Title Link", () => {
  it("should navigate to a page displaying the title 'Black Adam'", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".Poster").first().click(); // Clicking on the first poster
    cy.get(".Poster-Back h2").click(); // Clicking on the title link
    cy.url().should("include", "/436270"); // Replace <ID_of_Black_Adam> with the actual movie ID
    cy.get("h1").should("contain", "Black Adam"); // Verify the title 'Black Adam' on the new page
  });
});