describe("Relevent rerndering on remove force decision", () => {
  beforeEach(() => {
    cy.visit("/releventRernderOnRemoveForceDecision");
  });

  it("should have navigated to correct page", () => {
    cy.get("#flag-one").should(($div) => {
      const text1 = $div.text();
      expect(text1).equal("Component 1");
    });

    cy.get("#flag-two").should(($div) => {
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
  'removeForceDecision' resetting force desicion
    */

  it("only relevent hook should re-render on remove forced decision", () => {
    cy.get("#addForceDecision").click();
    cy.wait(2000); // takes sometime to rerender,

    cy.get("#rendered-times-flag-one").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 3 times");
    });
    cy.get("#rendered-times-flag-two").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
    cy.wait(1000); // takes sometime to rerender,

    cy.get("#removeForceDecision").click();
    cy.get("#rendered-times-flag-one").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 4 times");
    });
    cy.get("#rendered-times-flag-two").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });
});
