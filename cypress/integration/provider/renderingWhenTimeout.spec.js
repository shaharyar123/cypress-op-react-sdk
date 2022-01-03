describe("Rendering with timeout", () => {
  beforeEach(() => {
    cy.visit("/RenderingWhenTimeout");
  });

  it("should have navigated to correct page", () => {
    cy.get("#title").should(($div) => {
      const text = $div.text();
      expect(text).equal("With timeout");
    });
  });

  it("should render 3 times", () => {
    cy.wait(5000); // takes time to get datafile and re-render
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 3 times");
    });
  });
});
