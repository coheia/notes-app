import { limitText } from '@/utils/text'
import { categories } from '../category.mock'
import { CategorySlug, Category } from './Category'
import { getNotesFromStorage } from '../repositories/Notes'
import { getDateFormated } from '@/utils/date'

export type NoteTitle = string
export type NoteDescription = string
export type NoteCreated = Date
export type NoteCreatedFormated = string
export type NoteDone = boolean
export type NoteId = number

export interface NewNode {
  title: NoteTitle
  description: NoteDescription
  categorySlug: CategorySlug
}

export class Note {
  public title: NoteTitle
  public description: NoteDescription
  public shortDescription: NoteDescription | undefined
  public created: NoteCreated
  public createdFormated: NoteCreatedFormated
  public category: Category | undefined
  public id: NoteId
  public done: NoteDone = false

  constructor({ title, description, categorySlug }: NewNode) {
    const notes = getNotesFromStorage()
    const highestIdOrdered = notes?.sort((a, b) => b.id - a.id)

    this.title = title
    this.description = description
    this.shortDescription = limitText(this.description, 224)
    this.id = highestIdOrdered?.length > 0 ? highestIdOrdered[0].id + 1 : 1
    this.created = new Date()
    this.createdFormated = getDateFormated(this.created)
    this.category = categories.find(({ slug }) => categorySlug === slug)
  }
}
