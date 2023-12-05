describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("Poster initial view check", ()=>{
  it("should be able to handle an error with the view", ()=>{
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode:500
    })
    cy.visit("http://localhost:3000/")
  })
})

describe("Poster initial view check", ()=>{
  it("should be able to see the full view of the posters", ()=>{
    cy.visit("http://localhost:3000/")
      .get("div").contains("Poster-Front")
  })
})