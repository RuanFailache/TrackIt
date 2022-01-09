import { useCallback, useContext, useEffect, useState } from 'react'

import { MessageStyle } from '../../styles/FormStyle'
import { ContainerStyle, MainStyle } from '../../styles/GlobalStyle'
import { AddButtonStyle, HabitHeaderStyle } from '../../styles/HabitsStyle'

import Footer from '../Footer'
import Header from '../Header'
import HabitsList from './HabitsList'
import NewHabitBox from './NewHabitBox'

import HabitInterface from '../../interfaces/Habit/HabitInterface'

import UserContext from '../../contexts/UserContext'

import { getHabits } from '../../services/habitService'

export default function Habits() {
  const [habits, setHabits] = useState<HabitInterface[]>([])
  const [isCreatingNewHabit, setIsCreatingNewHabit] = useState<boolean>(false)

  const context = useContext(UserContext)

  const handleEffect = useCallback((response) => {
    setHabits([...response.data])
  }, [])

  useEffect(() => {
    let isActive = true
    if (isActive) {
      const token = context?.user?.token || ''
      getHabits(token).then(handleEffect)
    }
    return () => {
      isActive = false
    }
  }, [habits])

  return (
    <>
      <Header />

      <MainStyle>
        <ContainerStyle>
          <HabitHeaderStyle>
            <h2>Meus hábitos</h2>

            <AddButtonStyle
              type="button"
              onClick={() => setIsCreatingNewHabit(true)}
            >
              +
            </AddButtonStyle>
          </HabitHeaderStyle>

          {isCreatingNewHabit ? (
            <NewHabitBox
              setIsCreatingNewHabit={setIsCreatingNewHabit}
              setHabits={setHabits}
            />
          ) : null}

          {habits.length > 0 ? (
            <HabitsList habits={habits} />
          ) : (
            <MessageStyle>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </MessageStyle>
          )}
        </ContainerStyle>
      </MainStyle>

      <Footer />
    </>
  )
}
