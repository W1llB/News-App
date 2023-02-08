describe("basic render tests", () => {
  it("header & title checks", () => {
    cy.visit("/");
    cy.title().should("eq", "React App");
    cy.get(".app-header").should(
      "contain",
      "The World's News at your fingertips..."
    );
  });
  it("inputs render with default values", () => {
    cy.get("select").should("have.value", "Category");
    cy.get("input").should("have.value", "");
  });
});

describe("testing user flows", () => {
  //reset list before each test -commented out due to the limitations of the free tier - too many requests produces a 429 error
  // beforeEach(() => {
  //   cy.get('[type="reset"]').click();
  // });
  it("searches for tennis & finds tennis related content", () => {
    cy.get("input").type("tennis");
    cy.get('[type="submit"]').click();
    cy.intercept("https://gnews.io/api/v4/search?q=*", (req) => {
      expect(req.url).to.include("tennis");
    });
    cy.get(".results-container").should("contain", "tennis");
  });
  it("selects health category & finds health related content", () => {
    cy.get("select").select("Health");
    cy.intercept("https://gnews.io/api/v4/top-headlines?category=*", (req) => {
      expect(req.url).to.include("Health");
    });

    cy.get(".results-container");
  });
  it("go to article link works", () => {
    cy.get(":nth-child(1) > .article-content > .article-publisher").then(
      ($publisher) => {
        const publisher = $publisher.text();

        cy.get(
          ":nth-child(1) > .article-content > .article-footer > .article-url"
        )
          .should("have.attr", "href")
          .and("include", publisher.toLowerCase());
      }
    );
  });
});
