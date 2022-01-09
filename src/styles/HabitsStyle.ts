import styled from 'styled-components'
import themes from './themes'

export const HabitHeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const AddButtonStyle = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 35px;
  font-size: 26px;
  line-height: 29px;
  background-color: ${themes.lightBlue};
  color: ${themes.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

export const NewHabitBoxStyle = styled.form`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: ${themes.white};

  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  & > div > button {
    display: block;
    width: 84px;
    height: 35px;
    font-size: 16px;
    line-height: 19px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  & > div > button:nth-child(1) {
    background-color: transparent;
    color: ${themes.lightBlue};
  }

  & > div > button:nth-child(2) {
    background-color: ${themes.lightBlue};
    color: ${themes.white};
  }
`

export const DaysListStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`

interface DayStyleInterface {
  backgroundColor: string
  textColor: string
}

export const DayStyle = styled.button<DayStyleInterface>`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: solid 1px currentColor;
  border-radius: 5px;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`

export const HabitsListStyle = styled.ul`
  display: flex;
  flex-flow: nowrap column;
  gap: 20px;
`

export const HabitStyle = styled.li`
  display: block;
  padding: 20px;
  border-radius: 5px;
  background: ${themes.white};
  position: relative;

  strong {
    font-size: 20px;
    line-height: 23px;
    color: ${themes.darkGray};
  }
`

export const DeleteIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
`
