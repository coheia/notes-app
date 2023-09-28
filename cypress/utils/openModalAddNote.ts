export function openModalAddNote(): void {
  cy.visit('http://localhost:3000')
  cy.get('#button-add-more').click()
  cy.get('#modal-modal-title').should('contain', 'Add note')
}
