describe("Rendering with useDecision", () => {
  beforeEach(() => {
    cy.visit("/renderingUseDecision");
  });

  it("should have navigated to correct page", () => {
    cy.get("#title").should(($div) => {
      const text = $div.text();
      expect(text).equal("With useDecision");
    });
  });

  it("should render 2 times", () => {
    cy.wait(5000); // useDecision takes some time to get info from datafile and update rendering
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });
});
