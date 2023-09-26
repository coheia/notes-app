export function getDateFormated(date: Date): string {
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

  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${monthNames[month]} ${day}, ${year}`
}
