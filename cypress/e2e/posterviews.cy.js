describe("Poster error initial view check", () => {
  it("should be able to handle an error with the view", () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 500
    })
    cy.visit("http://localhost:3000/")
  })
})

describe("It should test the application", () => {
  beforeEach(() => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "/mock-data.json"
    })
    cy.visit("/")
  })
  describe("Poster Initial View Check", () => {
    it("should be able to see the main header on the home page", () => {
      cy.get(".header-title").should("contain", "Rancid Tomatillos");
    });
  });

  describe("It should let you click the Rancid Movies Button", () =>{
    it("should display Blowback as the first movie when Rancid Movies is clicked", ()=>{
      cy.contains("button", "Rancid Movies")
        .click();
      cy.wait(1000);
      cy.get(".Poster-Container")
        .children()
        .first()
        .find(".Poster-Image")
        .should("have.attr", "alt", "Blowback")
        .click()
      cy.get(".Poster-Back")
        .contains("h2", "Blowback")
      cy.get(".Poster-Back")
        .contains("h3", "Average Rating: 2")
      cy.get(".Poster-Back")
        .contains("h3", "Release Date: 2022-06-17")
    })
  })

  describe("It should let you click the Okay Movies Button", () =>{
    it("should display Black Adam as the first movie when Okay Movies is clicked", ()=>{
      cy.contains("button", "Okay Movies")
        .click();
      cy.wait(1000);
      cy.get(".Poster-Container")
        .children()
        .first()
        .find(".Poster-Image")
        .should("have.attr", "alt", "Black Adam")
        .click()
      cy.get(".Poster-Back")
        .contains("h2", "Black Adam")
      cy.get(".Poster-Back")
        .contains("h3", "Average Rating: 4")
      cy.get(".Poster-Back")
        .contains("h3", "Release Date: 2022-10-19")
    })
  })

  describe("It should let you click the Good Movies Button", () =>{
    it("should display Lyle, Lyle, Crocodile as the first movie when Good Movies is clicked", ()=>{
      cy.contains("button", "Good Movies")
        .click();
      cy.wait(1000);
      cy.get(".Poster-Container")
        .children()
        .first()
        .find(".Poster-Image")
        .should("have.attr", "alt", "Lyle, Lyle, Crocodile")
        .click()
      cy.get(".Poster-Back")
        .contains("h2", "Lyle, Lyle, Crocodile")
      cy.get(".Poster-Back")
        .contains("h3", "Average Rating: 6")
      cy.get(".Poster-Back")
        .contains("h3", "Release Date: 2022-10-07")
    })
  })

  describe("It should let you click the Great Movies Button", () =>{
    it("should display Smile as the first movie when Great Movies is clicked", ()=>{
      cy.contains("button", "Great Movies")
        .click();
      cy.wait(1000);
      cy.get(".Poster-Container")
        .children()
        .first()
        .find(".Poster-Image")
        .should("have.attr", "alt", "Smile")
        .click()
      cy.get(".Poster-Back")
        .contains("h2", "Smile")
      cy.get(".Poster-Back")
        .contains("h3", "Average Rating: 8")
      cy.get(".Poster-Back")
        .contains("h3", "Release Date: 2022-09-23")
    })
  })

  describe("It should let you click the Excellent Movies Button", () =>{
    it("should display On The Line as the first movie when Excellent Movies is clicked", ()=>{
      cy.contains("button", "Excellent Movies")
        .click();
      cy.wait(1000);
      cy.get(".Poster-Container")
        .children()
        .first()
        .find(".Poster-Image")
        .should("have.attr", "alt", "On The Line")
        .click()
      cy.get(".Poster-Back")
        .contains("h2", "On The Line")
      cy.get(".Poster-Back")
        .contains("h3", "Average Rating: 10")
      cy.get(".Poster-Back")
        .contains("h3", "Release Date: 2022-10-3")
    })
  })

  describe("It should let you click the Show All Movies Button", () =>{
    it("should display On The Line as the first movie when Show All Movies is clicked", ()=>{
      cy.contains("button", "Show All Movies")
        .click();
      cy.wait(1000);
      cy.get(".Poster-Container")
        .children()
        .first()
        .find(".Poster-Image")
        .should("have.attr", "alt", "Black Adam")
        .click()
      cy.get(".Poster-Back")
        .contains("h2", "Black Adam")
      cy.get(".Poster-Back")
        .contains("h3", "Average Rating: 4")
      cy.get(".Poster-Back")
        .contains("h3", "Release Date: 2022-10-19")
    })
  })

  describe("Clicking on First Poster", () => {
    it("should display 'Black Adam' when the first poster is clicked", () => {
      cy.get(".Poster-Container ")
        .children()
        .first()
        .find(".Poster-Image")
        .should("have.attr", "alt", "Black Adam")
        .click()
      cy.get(".Poster-Back")
        .contains("h2", "Black Adam")
      cy.get(".Poster-Back")
        .contains("h3", "Average Rating: 4")
      cy.get(".Poster-Back")
        .contains("h3", "Release Date: 2022-10-19")
    });
  });

  describe("Clicking on Last Poster", () => {
    it("should display 'X' when the last poster is clicked", () => {
      cy.get(".Poster-Container ")
        .children()
        .last()
        .find(".Poster-Image")
        .should("have.attr", "alt", "X")
        .click()
      cy.get(".Poster-Back")
        .contains("h2", "X")
      cy.get(".Poster-Back")
        .contains("h3", "Average Rating: 1")
      cy.get(".Poster-Back")
        .contains("h3", "Release Date: 2022-03-17")
    });
  });

  describe("Clicking on First Poster for more information", () => {
    beforeEach(() => {
      cy.get(".Poster-Container")
        .children()
        .first()
        .find(".Poster-Image")
        .should("have.attr", "alt", "Black Adam")
        .click();
      cy.get(".Poster-Back").as("movieInfo");
    });
  
    it("Should display the movie full movie information of the first movie when the link is clicked", () => {
      cy.get("@movieInfo")
        .contains("h2", "Black Adam");
      cy.get("@movieInfo")
        .contains("h3", "Average Rating: 4");
      cy.get("@movieInfo")
        .contains("h3", "Release Date: 2022-10-19");
      cy.get("@movieInfo")
        .find("a")
        .click({ force: true });
      cy.get(".movie-details-box")
        .as("movieDetails");
      cy.get("@movieDetails")
        .contains("h1", "Black Adam");
      cy.get("@movieDetails")
        .contains("h3", "The world needed a hero. It got Black Adam.");
      cy.get("@movieDetails")
        .contains("p", "Rated: 4/10");
      cy.get("@movieDetails")
        .contains("p", "Release Date: 2022-10-19");
      cy.get("@movieDetails")
        .contains("p", "Run Time: 125");
      cy.get("@movieDetails")
        .contains("p", "Nearly 5,000");
      cy.get("@movieDetails")
        .contains("p", "Budget: $200000000");
      cy.get("@movieDetails")
        .contains("p", "Revenue: $384571691");
      cy.get("@movieDetails")
        .contains("p", "Profit: $184571691");
      cy.get("@movieDetails")
        .contains("h2", "Personal Thoughts of Brendan and Lex");
      cy.get("@movieDetails")
        .contains("p", "This movie is terrible!");
      cy.url()
        .should("eq", "http://localhost:3000/436270");
    });
  });

  describe("Clicking on Last Poster for more information", () => {
    beforeEach(() => {
      cy.get(".Poster-Container")
        .children()
        .last()
        .find(".Poster-Image")
        .should("have.attr", "alt", "X")
        .click();
      cy.get(".Poster-Back").as("movieInfo");
    });
  
    it("Should display the movie full movie information of the last movie when the link is clicked", () => {
      cy.get("@movieInfo")
        .contains("h2", "X");
      cy.get("@movieInfo")
        .contains("h3", "Average Rating: 1");
      cy.get("@movieInfo")
        .contains("h3", "Release Date: 2022-03-17");
      cy.get("@movieInfo")
        .find("a")
        .click({ force: true });
      cy.get(".movie-details-box").as("movieDetails");
      cy.get("@movieDetails")
        .contains("h1", "X");
      cy.get("@movieDetails")
        .contains("h3", "Dying to show you a good time.");
      cy.get("@movieDetails")
        .contains("p", "Rated: 1/10");
      cy.get("@movieDetails")
        .contains("p", "Release Date: 2022-03-17");
      cy.get("@movieDetails")
        .contains("p", "Run Time: 106");
      cy.get("@movieDetails")
        .contains("p", "In 1979");
      cy.get("@movieDetails")
        .contains("p", "Budget: $10000000");
      cy.get("@movieDetails")
        .contains("p", "Revenue: $14476595");
      cy.get("@movieDetails")
        .contains("p", "Profit: $4476595");
      cy.get("@movieDetails")
        .contains("h2", "Personal Thoughts of Brendan and Lex");
      cy.get("@movieDetails")
        .contains("p", "This movie is terrible!");
      cy.url()
        .should("eq", "http://localhost:3000/760104")
    });
  });
})

describe("Invalid Movie ID Handling", () => {
  it("should display an error message for an invalid movie ID", () => {
    const invalidMovieId = "35635262546";

    cy.intercept("GET", `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${invalidMovieId}`, {
      statusCode: 404,
      body: "Error: 35635262546 is not a valid movie ID! Try again?",
    }).as("invalidMovieRequest");

    cy.visit(`http://localhost:3000/${invalidMovieId}`);

    cy.wait("@invalidMovieRequest").then((interception) => {
      expect(interception.response.statusCode).to.eq(404);
      cy.contains("Error: 35635262546 is not a valid movie ID! Try again?").should("be.visible");
    });
  });
});