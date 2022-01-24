describe("Rerndering on force decision", () => {
  beforeEach(() => {
    cy.visit("/releventRernderOnForceDecision");
  });

  it("should have navigated to correct page", () => {
    cy.get("#flag-one").should(($div) => {
      console.log("$div", $div);
      const text1 = $div.text();
      expect(text1).equal("Component 1");
    });

    cy.get("#flag-two").should(($div) => {
      console.log("$div", $div);
      const text1 = $div.text();
      expect(text1).equal("Component 2");
    });
  });

  it("component 1 and 2 should render initially", () => {
    cy.get("#rendered-times-flag-one").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
    cy.get("#rendered-times-flag-two").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });

  /*  
  'addForceDecision' is for setting up force desicion
    */

  it("only relevent hook should re-render on forced decision", () => {
    cy.get("#addForceDecision").click();
    //   cy.wait(4000); //  updateInterval is 3000,
    cy.get("#rendered-times-flag-one").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 3 times");
    });
    cy.get("#rendered-times-flag-two").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });
});
