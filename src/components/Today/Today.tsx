import { useMakeTodayTitle } from '../../hooks/useMakeTodayTitle'
import { usePercentageHabitsDone } from '../../hooks/usePercentageHabitsDone'

import { ContainerStyle, MainStyle } from '../../styles/GlobalStyle'
import {
  GreenTextStyle,
  TodayHabitsTitleStyle,
} from '../../styles/TodayHabitsStyle'

import Footer from '../Footer'
import Header from '../Header'
import TodayHabit from './TodayHabit'

import useGetTodayHabits from '../../hooks/useGetTodayHabits'

export default function Today() {
  const todayHabits = useGetTodayHabits()
  const title = useMakeTodayTitle(todayHabits)
  const percentageHabitsDone = usePercentageHabitsDone(todayHabits)

  return (
    <>
      <Header />

      <MainStyle>
        <ContainerStyle>
          <TodayHabitsTitleStyle>
            <h2>{title}</h2>

            {!percentageHabitsDone ? (
              <p>Nenhum hábito concluído ainda</p>
            ) : (
              <p>
                <GreenTextStyle>
                  {percentageHabitsDone} dos hábitos concluídos
                </GreenTextStyle>
              </p>
            )}
          </TodayHabitsTitleStyle>

          <ul>
            {todayHabits.map((habit) => (
              <TodayHabit key={habit.id} habit={habit} />
            ))}
          </ul>
        </ContainerStyle>
      </MainStyle>

      <Footer />
    </>
  )
}
