interface NoteInfo {
  title: string
  description: string
  category: string
}

export function createNote(category: string): NoteInfo {
  const titleInput = cy.get('#note-title-input')
  const descriptionInput = cy.get('#note-description-input')
  const selectCategory = cy.get('#note-category-input')
  const buttonAdd = cy.get('#button-add')

  const randonId = Math.floor(Math.random() * 9999)
  const title = `Some title ${randonId}`
  const description = `Lorem for ${randonId} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam purus est.`

  titleInput.type(title)
  descriptionInput.type(description)
  selectCategory.type(`${category}{enter}`)

  buttonAdd.click()

  return { title, description, category }
}
