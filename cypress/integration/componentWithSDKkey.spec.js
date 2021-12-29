describe("Rendering with SDK key", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render 2 times", () => {
    cy.get("#with-sdk-key-rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });
  it("should not render 1 time", () => {
    cy.get("#with-sdk-key-rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).not.equal("Rendered 1 times");
    });
  });
});
