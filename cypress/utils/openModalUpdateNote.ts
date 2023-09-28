export function openModalUpdateNote(id: number): void {
  cy.visit('http://localhost:3000')
  cy.get(`#button-update-note-${id}`).click()
  cy.get('#modal-modal-title').should('contain', 'Update note')
}
