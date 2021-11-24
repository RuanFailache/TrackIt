import React, { useContext } from 'react';
import DaysList from '../DaysList/DaysList';

import {
  DeleteButtonStyle,
  HabitBoxStyle,
} from './HabitsStyles';

import trash from '../../assets/trash.svg';
import { deleteHabit } from '../../services/api';
import UserContext from '../../context/Context';

const HabitBox = function ({ habit }) {
  const { user } = useContext(UserContext);

  const handleClick = async (id) => {
    try {
      await deleteHabit(user.token, id);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <HabitBoxStyle>
      <h3>{habit.name}</h3>
      <DaysList
        days={habit.days}
        isClickable={false}
      />
      <DeleteButtonStyle
        onClick={() => handleClick(habit.id)}
        src={trash}
        alt=""
      />
    </HabitBoxStyle>
  );
};

export default HabitBox;
