import { limitText } from '../../src/utils/text'
import { createNote } from '../utils/createNote'
import { openModalAddNote } from '../utils/openModalAddNote'
import { openModalUpdateNote } from '../utils/openModalUpdateNote'

describe('should edit note', () => {
  it('should fields must be fullfilled', () => {
    const noteId = 1
    openModalAddNote()
    const { title, description, category } = createNote('Personal')
    openModalUpdateNote(noteId)
    expect(cy.get('#note-title-input').should('contain.value', title))
    expect(
      cy.get('#note-description-input').should('contain.value', description)
    )
    expect(cy.get('#note-category-input').should('contain.text', category))

    cy.get('#note-title-input').type(' updated')
    cy.get('#note-description-input').type(' updated')
    cy.get('#note-category-input').type('work{enter}')

    cy.get('#button-update').click()

    cy.get(`#card-title-${noteId}`).should('have.text', title + ' updated')
  })

  it('should be checked and uncheched', () => {
    const noteId = 1
    openModalAddNote()
    const { title, description, category } = createNote('Personal')

    cy.get(`#card-title-${noteId}`).click()

    cy.get(`#progress-bar-text`).should(
      'have.text',
      'You have completed all notes'
    )

    cy.get(`#card-note-${noteId}`).should('have.class', 'done')

    cy.get(`#card-title-${noteId}`).click()

    cy.get(`#progress-bar-text`).should(
      'have.text',
      'You have 0/1 notes completed'
    )

    cy.get(`#card-note-${noteId}`).should('not.have.class', 'done')
  })
})
