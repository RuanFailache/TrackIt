import { useMemo } from 'react'

export function useDayList(selectedDays?: number[]) {
  return useMemo(
    () => [
      {
        displayOnButton: 'D',
        dayName: 'Domingo',
        isSelected: selectedDays?.includes(0) || false,
      },
      {
        displayOnButton: 'S',
        dayName: 'Segunda',
        isSelected: selectedDays?.includes(1) || false,
      },
      {
        displayOnButton: 'T',
        dayName: 'Terça',
        isSelected: selectedDays?.includes(2) || false,
      },
      {
        displayOnButton: 'Q',
        dayName: 'Quarta',
        isSelected: selectedDays?.includes(3) || false,
      },
      {
        displayOnButton: 'Q',
        dayName: 'Quinta',
        isSelected: selectedDays?.includes(4) || false,
      },
      {
        displayOnButton: 'S',
        dayName: 'Sexta',
        isSelected: selectedDays?.includes(5) || false,
      },
      {
        displayOnButton: 'S',
        dayName: 'Sábado',
        isSelected: selectedDays?.includes(6) || false,
      },
    ],
    [selectedDays]
  )
}
