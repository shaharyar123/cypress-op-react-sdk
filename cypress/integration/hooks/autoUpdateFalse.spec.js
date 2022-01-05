describe("Rendering With false autoUpdate", () => {
  beforeEach(() => {
    cy.visit("/falseAutoUpdate");
  });
  afterEach(() => {
    cy.get("#resetDatafileBtn").click(); //  reset datafile to orignal before every test case
  });

  it("should have navigated to correct page", () => {
    cy.get("#title").should(($div) => {
      const text = $div.text();
      expect(text).equal("AutoUpdate is False");
    });
  });

  it("should only render on first datafile update", () => {
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });

  /*  
for gender=male in useDecision, it should return test-1 variation as in datafile
'updateDatafileBtn' is used to update datafile, variation key is renamed and incremented by 1, i.e test-1 -> test-2 for every click
   and reversion will also be incremented by +1
'resetDatafileBtn' is used to reset datafile to orignal data
'addForceDecision' is for setting up force desicion
'changeUser' is for changing the user
 */

  it("should not re-render on subsequent datafile updates", () => {
    cy.get("#updateDatafileBtn").click();
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
    cy.get("#variation-key").should(($div) => {
      const text = $div.text();
      expect(text).equal("test-1");
    });
  });

  it("should not re-render on user change", () => {
    cy.get("#changeUser").click();
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });

  it("should not re-render on forced decision change", () => {
    cy.get("#addForceDecision").click();
    cy.get("#rendered-times").should(($div) => {
      const text = $div.text();
      expect(text).equal("Rendered 2 times");
    });
  });
});
