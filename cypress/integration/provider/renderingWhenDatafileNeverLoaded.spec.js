describe("Rendering With no datafile", () => {
  beforeEach(() => {
    cy.visit("/RenderingWithoutDatafile");
  });

  it("should have navigated to correct page", () => {
    cy.get("#title").should(($div) => {
      const text = $div.text();
      expect(text).equal("With no datafile");
    });
  });

  it("should render 2 times", () => {
    cy.wait(3000); // takes time to get data from useDecision and rerender
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });
});
