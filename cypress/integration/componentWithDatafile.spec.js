describe("Rendering with SDK key", () => {
  beforeEach(() => {
    cy.visit("/datafile");
  });

  it("should have navigated to correct page", () => {
    cy.get("#title").should(($div) => {
      const text = $div.text();
      expect(text).equal("With Datafile");
    });
  });

  it("should render 1 times", () => {
    cy.get("#with-sdk-key-rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 1 times");
    });
  });
  it("should not render 2 time", () => {
    cy.get("#with-sdk-key-rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).not.equal("Rendered 2 times");
    });
  });
});
