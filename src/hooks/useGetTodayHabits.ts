import { useCallback, useContext, useEffect, useState } from 'react'
import UserContext from '../contexts/UserContext'
import TodayHabitsInterface from '../interfaces/Today/TodayHabitsInterface'
import { getTodayHabits } from '../services/habitTodayService'

export default function useGetTodayHabits() {
  const context = useContext(UserContext)

  const [todayHabits, setTodayHabits] = useState<TodayHabitsInterface[]>([])

  const handleEffect = useCallback((response) => {
    setTodayHabits(response.data)
  }, [])

  useEffect(() => {
    let isActive = true

    if (isActive) {
      const token = context?.user?.token || ''
      getTodayHabits(token).then(handleEffect)
    }
    return () => {
      isActive = false
    }
  }, [context, todayHabits])

  return todayHabits
}
