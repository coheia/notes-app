import slug from 'slug'

export type CategoryName = string
export type CategoryColor = string
export type CategorySlug = string
export type CategoryLink = string

export class Category {
  public name: CategoryName
  public color: CategoryColor
  public slug: CategorySlug
  public link: CategoryLink

  constructor(name: CategoryName, color: CategoryColor) {
    this.name = name
    this.color = color
    this.slug = slug(name)
    this.link = `/category/${this.slug}`
  }
}
