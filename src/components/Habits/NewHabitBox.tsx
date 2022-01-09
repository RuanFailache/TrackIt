import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { NewHabitBoxStyle } from '../../styles/HabitsStyle'

import DaysList from '../DaysList/DaysList'
import Input from '../Form/Input'
import Button from '../Form/Button'

import { createNewHabit } from '../../services/habitService'

import UserContext from '../../contexts/UserContext'

import NewHabitInterface from '../../interfaces/Habit/NewHabitInterface'
import HabitInterface from '../../interfaces/Habit/HabitInterface'

interface NewHabitBoxPropsInterface {
  setHabits: Dispatch<SetStateAction<HabitInterface[]>>
  setIsCreatingNewHabit: Dispatch<SetStateAction<boolean>>
}

export default function NewHabitBox(props: NewHabitBoxPropsInterface) {
  const { setIsCreatingNewHabit, setHabits } = props

  const [habitName, setHabitName] = useState<string>('')
  const [selectedDays, setSelectedDays] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const context = useContext(UserContext)

  const elements = useMemo<NewHabitInterface>(
    () => ({
      name: habitName,
      days: selectedDays,
    }),
    [habitName, selectedDays]
  )

  const handleSubmitSuccess = useCallback((response) => {
    setHabitName('')
    setSelectedDays([])
    setHabits((habits) => [...habits, response.data])
    setIsCreatingNewHabit(false)
  }, [])

  const handleSubmit = useCallback((event, body) => {
    event.preventDefault()
    setIsLoading(true)
    const token = context?.user?.token || ''
    createNewHabit(body, token)
      .then(handleSubmitSuccess)
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <NewHabitBoxStyle onSubmit={(event) => handleSubmit(event, elements)}>
      <Input
        value={habitName}
        setValue={setHabitName}
        type="habit"
        isLoading={isLoading}
      />

      <DaysList
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
        isDisabled={isLoading}
      />

      <div>
        <button
          onClick={() => setIsCreatingNewHabit(false)}
          type="button"
          disabled={isLoading}
        >
          Cancelar
        </button>

        <Button isLoading={isLoading}>Salvar</Button>
      </div>
    </NewHabitBoxStyle>
  )
}
