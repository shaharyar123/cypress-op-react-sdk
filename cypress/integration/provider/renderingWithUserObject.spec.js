describe("Rendering with User Object", () => {
  beforeEach(() => {
    cy.visit("/renderWithUserObject");
  });

  it("should have navigated to correct page", () => {
    cy.get("#title").should(($div) => {
      const text = $div.text();
      expect(text).equal("With User Object");
    });
  });

  it("should render 1 times", () => {
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 1 times");
    });
  });
});
