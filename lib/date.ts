import dayjs from 'dayjs'

export const getDate = (date: Date, ) => {
  return dayjs(date).format("YYYY-MM-DD")
}
