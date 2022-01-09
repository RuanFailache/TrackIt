import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'

import { ProgressBarStyle } from '../styles/FixedComponentsStyle'

import themes from '../styles/themes'

import 'react-circular-progressbar/dist/styles.css'
import useGetTodayHabits from '../hooks/useGetTodayHabits'
import { usePercentageHabitsDone } from '../hooks/usePercentageHabitsDone'

export default function ProgressBar() {
  const todayHabits = useGetTodayHabits()
  const percentageHabitsDone = usePercentageHabitsDone(todayHabits)

  return (
    <ProgressBarStyle>
      <CircularProgressbarWithChildren
        value={percentageHabitsDone}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: themes.lightBlue,
          pathColor: themes.white,
          trailColor: 'transparent',
        })}
      >
        <strong>Hoje</strong>
      </CircularProgressbarWithChildren>
    </ProgressBarStyle>
  )
}
