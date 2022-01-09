import styled from 'styled-components'
import themes from './themes'

export const TodayHabitsTitleStyle = styled.header`
  display: flex;
  flex-flow: nowrap column;
  gap: 10px;
`

export const TodayHabitStyle = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  background-color: ${themes.white};
  color: ${themes.darkGray};
  border-radius: 5px;

  strong {
    font-size: 20px;
    line-height: 23px;
  }

  p {
    display: block;
    margin-top: 5px;
    font-size: 13px;
    line-height: 16px;
  }

  div {
    width: calc(100% - 69px);
  }
`

interface CheckButtonPropsInterface {
  backgroundColor: string
}

export const CheckButton = styled.button<CheckButtonPropsInterface>`
  width: 69px;
  height: 69px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
`

export const GreenTextStyle = styled.span`
  color: ${themes.green};
`
