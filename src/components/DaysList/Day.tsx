import { Dispatch, SetStateAction, useCallback } from 'react'
import { DayStyle } from '../../styles/HabitsStyle'
import themes from '../../styles/themes'

interface DayPropsInterface {
  weekday: string
  weekdayIndex: number
  isSelected: boolean
  isDisabled: boolean
  setSelectedDays: Dispatch<SetStateAction<number[]>>
}

function Day(props: DayPropsInterface) {
  const { weekday, weekdayIndex, isSelected, setSelectedDays, isDisabled } =
    props

  const handleClick = useCallback((day: number) => {
    setSelectedDays((selectedDays) => {
      if (selectedDays.includes(day))
        return selectedDays.filter((selectedDay) => selectedDay !== day)
      return [...selectedDays, day]
    })
  }, [])

  return (
    <DayStyle
      type="button"
      onClick={() => handleClick(weekdayIndex)}
      backgroundColor={isSelected ? themes.gray : 'none'}
      textColor={isSelected ? themes.white : themes.gray}
      disabled={isDisabled}
    >
      {weekday[0]}
    </DayStyle>
  )
}

export default Day
