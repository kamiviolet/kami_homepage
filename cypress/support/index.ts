Cypress.Commands.add("dataCy", (value) => {
  return cy.get(`[data-cy=${value}]`);
});

declare namespace Cypress {
  interface Chainable<Subject> {
    dataCy(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
