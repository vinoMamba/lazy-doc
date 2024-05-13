import dayjs from 'dayjs'

export const formatDate = (date: Date | string | null, formatStr: string): string => {
  if (date === null) return ""
  return dayjs(date).format(formatStr)
}
