import { Dispatch, SetStateAction } from 'react'
import { useDayList } from '../../hooks/useDayList'
import { DaysListStyle } from '../../styles/HabitsStyle'
import Day from './Day'

interface DaysListPropsInterface {
  selectedDays: number[]
  setSelectedDays: Dispatch<SetStateAction<number[]>>
  isDisabled: boolean
}

export default function DaysList(props: DaysListPropsInterface) {
  const { selectedDays, setSelectedDays, isDisabled } = props

  const weekdays = useDayList(selectedDays)

  return (
    <DaysListStyle>
      {weekdays.map((weekday, index) => (
        <li key={weekday.dayName}>
          <Day
            weekday={weekday.displayOnButton}
            weekdayIndex={index}
            isSelected={weekday.isSelected}
            setSelectedDays={setSelectedDays}
            isDisabled={isDisabled}
          />
        </li>
      ))}
    </DaysListStyle>
  )
}
