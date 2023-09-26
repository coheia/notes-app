import { limitText } from '@/utils/text'
import { categories } from '../category.mock'
import { CategorySlug, Category } from './Category'
import { getNotesFromStorage } from '../repositories/Notes'

export type NoteTitle = string
export type NoteDescription = string
export type NoteCreated = Date
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
  public created: NoteCreated
  public category: Category | undefined
  public id: NoteId
  public done: NoteDone = false

  constructor({ title, description, categorySlug }: NewNode) {
    const notes = getNotesFromStorage()
    const highestIdOrdered = notes.sort((a, b) => b.id - a.id)

    this.title = title
    this.description = description
    this.id = highestIdOrdered.length > 0 ? highestIdOrdered[0].id + 1 : 1
    this.created = new Date()
    this.category = categories.find(({ slug }) => categorySlug === slug)
  }

  public setDone(done: NoteDone): void {
    this.done = done
  }

  public getShortDescription(): string {
    return limitText(this.description, 224)
  }

  public getCategory(): Category {
    if (this.category) return this.category
    else return new Category('Uncategorized', 'transparent')
  }

  public getCreated(): string {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ]

    const day = this.created.getDate()
    const month = this.created.getMonth()
    const year = this.created.getFullYear()

    return `${monthNames[month]} ${day}, ${year}`
  }
}
