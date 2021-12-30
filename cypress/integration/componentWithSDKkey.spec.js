describe("Rendering with SDK key", () => {
  beforeEach(() => {
    cy.visit("/sdkKey");
  });

  it("should have navigated to correct page", () => {
    cy.get("#title").should(($div) => {
      const text = $div.text();
      expect(text).equal("With SDK Key");
    });
  });

  it("should render 1 times", () => {
    cy.get("#with-sdk-key-rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 1 times");
    });
  });
});
