import { useMemo } from 'react'

import TodayHabitsInterface from '../interfaces/Today/TodayHabitsInterface'

export function usePercentageHabitsDone(todayHabits: TodayHabitsInterface[]) {
  return useMemo(() => {
    const lenTodayHabits = todayHabits.length
    const doneHabits = todayHabits.filter((habit) => habit.done)
    const lenDoneHabits = doneHabits.length
    return Math.ceil((lenDoneHabits / lenTodayHabits) * 100)
  }, [todayHabits])
}
