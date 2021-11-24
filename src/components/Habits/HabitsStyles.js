import styled from 'styled-components';
import themes from '../../styles/themes';

export const CreateNewHabitFormStyle = styled.form`
  margin-bottom: 30px;
  padding: 15px;
  border-radius: 5px;
  background-color: ${themes.white};

  & > input {
    margin-bottom: 7.5px;
  }
`;

export const CreateNewHabitControlsStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;

  & > button {
    margin: 0;
    
    font-size: 16px;
    line-height: 19px;
  }
`;

export const HabitBoxStyle = styled.section`
  display: flex;
  flex-flow: nowrap column;
  gap: 7.5px;
  padding: 15px;
  border-radius: 5px;
  background-color: ${themes.white};
  position: relative;
`;

export const ListHabitsStyle = styled.ul`
  display: flex;
  flex-flow: nowrap column;
  gap: 15px;
  margin-bottom: 90px;
`;

export const DeleteButtonStyle = styled.img`
  display: block;
  position: absolute;
  right: 15px;
`;
