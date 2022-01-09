import HabitInterface from '../../interfaces/Habit/HabitInterface'
import { HabitsListStyle } from '../../styles/HabitsStyle'
import Habit from './Habit'

interface HabitPropsInterface {
  habits: HabitInterface[]
}

export default function HabitsList(props: HabitPropsInterface) {
  const { habits } = props

  return (
    <HabitsListStyle>
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </HabitsListStyle>
  )
}
