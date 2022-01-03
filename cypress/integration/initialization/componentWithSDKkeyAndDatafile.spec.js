describe("Rendering with SDK key and Datafile", () => {
  beforeEach(() => {
    cy.visit("/keyDatafile");
  });

  it("should have navigated to correct page", () => {
    cy.get("#title").should(($div) => {
      const text = $div.text();
      expect(text).equal("With SDK Key and Datafile");
    });
  });

  it("should render 1 times", () => {
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 1 times");
    });
  });
});
