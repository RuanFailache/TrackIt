import { useMemo } from 'react'
import TodayHabitsInterface from '../interfaces/Today/TodayHabitsInterface'
import { useDayList } from './useDayList'

export function useMakeTodayTitle(todayHabits: TodayHabitsInterface[]) {
  const dayList = useDayList()

  return useMemo(() => {
    const todayDate = new Date()

    const day = todayDate.getDay()
    const date = todayDate.getDate()
    const month = todayDate.getMonth() + 1

    const dateString = date < 10 ? `0${date}` : date
    const monthString = month < 10 ? `0${month}` : month
    const weekday = dayList[day].dayName

    return `${weekday}, ${dateString}/${monthString}`
  }, [todayHabits])
}
