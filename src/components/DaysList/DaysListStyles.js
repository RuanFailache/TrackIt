import styled from 'styled-components';
import themes from '../../styles/themes';

export const DaysListStyle = styled.ul`
  display: flex;
  gap: 7.5px;
`;

export const DayItemStyle = styled.li`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: solid 1px ${themes.lightGray};
  border-radius: 5px;
  background-color: ${(props) => props.bgColor};
  box-sizing: border-box;
  cursor: pointer;
  transition: .3s;

  & {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: ${(props) => props.color};
  }
`;
