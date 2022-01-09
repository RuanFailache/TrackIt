import { useCallback, useContext, useMemo, useState } from 'react'

import {
  CheckButton,
  TodayHabitStyle,
  GreenTextStyle,
} from '../../styles/TodayHabitsStyle'

import TodayHabitsInterface from '../../interfaces/Today/TodayHabitsInterface'

import Check from '../../assets/Check.svg'
import UserContext from '../../contexts/UserContext'
import { checkHabit, uncheckHabit } from '../../services/habitTodayService'
import themes from '../../styles/themes'

interface TodayHabitPropsInterface {
  habit: TodayHabitsInterface
}

export default function TodayHabit(props: TodayHabitPropsInterface) {
  const { habit } = props

  const [isDone, setIsDone] = useState<boolean>(habit.done)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const context = useContext(UserContext)

  const sequences = useMemo(() => {
    const current = habit.currentSequence
    const highest = habit.highestSequence

    return {
      current: current !== 1 ? `${current} dias` : `${current} dia`,
      highest: highest !== 1 ? `${highest} dias` : `${highest} dia`,
    }
  }, [habit])

  const handleAsyncSuccess = useCallback(() => {
    setIsDone(!isDone)
    setIsLoading(false)
  }, [isDone])

  const handleClick = useCallback(() => {
    setIsLoading(true)
    const token = context?.user?.token || ''
    if (habit.done) uncheckHabit(habit.id, token).then(handleAsyncSuccess)
    else checkHabit(habit.id, token).then(handleAsyncSuccess)
  }, [context, habit])

  return (
    <TodayHabitStyle>
      <div>
        <strong>{habit.name}</strong>
        <p>
          Sequência atual:
          {habit.currentSequence ? (
            <GreenTextStyle> {sequences.current}</GreenTextStyle>
          ) : (
            <span> {sequences.current}</span>
          )}
        </p>
        <p>
          Seu recorde:{' '}
          {habit.currentSequence && sequences.current === sequences.highest ? (
            <GreenTextStyle>{sequences.highest}</GreenTextStyle>
          ) : (
            sequences.highest
          )}
        </p>
      </div>

      <aside>
        <CheckButton
          type="button"
          onClick={handleClick}
          backgroundColor={isDone ? themes.green : themes.gray}
          disabled={isLoading}
        >
          <img src={Check} alt="Marcar hábito como feito" />
        </CheckButton>
      </aside>
    </TodayHabitStyle>
  )
}
