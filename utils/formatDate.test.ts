import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('should format the date correctly with single-digit month and day', () => {
    const date = new Date('2023-5-7')
    const result = formatDate(date)
    expect(result).toBe('2023-05-07')
  })

  it('should format the date correctly with double-digit month and day', () => {
    const date = new Date('2023-12-15')
    const result = formatDate(date)
    expect(result).toBe('2023-12-15')
  })
})
