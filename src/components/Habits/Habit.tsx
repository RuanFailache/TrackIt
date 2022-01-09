import { useCallback, useContext, useState } from 'react'
import { DeleteIcon, HabitStyle } from '../../styles/HabitsStyle'
import DaysList from '../DaysList/DaysList'
import Trash from '../../assets/Trash.svg'
import { deleteHabit } from '../../services/habitService'
import UserContext from '../../contexts/UserContext'
import HabitInterface from '../../interfaces/Habit/HabitInterface'

interface HabitPropsInterface {
  habit: HabitInterface
}

export default function Habit(props: HabitPropsInterface) {
  const { habit } = props

  const setSelectedDays = useState<number[]>([])[1]

  const context = useContext(UserContext)

  const handleClick = useCallback(() => {
    const token = context?.user?.token || ''
    deleteHabit(habit.id, token)
  }, [context])

  return (
    <HabitStyle>
      <strong>{habit.name}</strong>
      <DaysList
        selectedDays={habit.days}
        setSelectedDays={setSelectedDays}
        isDisabled
      />
      <DeleteIcon src={Trash} alt="Deletar hábito" onClick={handleClick} />
    </HabitStyle>
  )
}
