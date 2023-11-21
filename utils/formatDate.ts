export const formatDate = (date: Date): string => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDate()

  const formattedMonth = month < 10 ? `0${month}` : month
  const formattedDay = day < 10 ? `0${day}` : day

  return `${year}-${formattedMonth}-${formattedDay}`
}
