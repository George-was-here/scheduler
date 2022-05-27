describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("should visit days", () => {
    cy.visit("/api/days");
  });
});