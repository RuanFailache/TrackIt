/* eslint-disable react/jsx-no-bind */
import React, {
  useContext,
  useState,
} from 'react';

import {
  FilledButtonStyle,
  LinkStyle,
  TextInputStyle,
} from '../../styles/Styles';

import {
  CreateNewHabitControlsStyle,
  CreateNewHabitFormStyle,
} from './HabitsStyles';

import DaysList from '../DaysList/DaysList';

import UserContext from '../../context/Context';

import {
  createNewHabit,
} from '../../services/api';

const CreateNewHabit = function ({ setIsCreatingNew }) {
  const [newHabit, setNewHabit] = useState('');
  const [days, setDays] = useState([]);

  const { user } = useContext(UserContext);

  async function createHabit(e) {
    e.preventDefault();

    if (days.length === 0) {
      return;
    }

    try {
      await createNewHabit(user.token, {
        name: newHabit,
        days,
      });
      setIsCreatingNew(false);
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <CreateNewHabitFormStyle onSubmit={createHabit}>
      <TextInputStyle
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="nome do hábito"
        required
      />

      <DaysList
        days={days}
        setDays={setDays}
        isClickable
      />

      <CreateNewHabitControlsStyle>
        <LinkStyle onClick={() => setIsCreatingNew(false)}>
          Cancelar
        </LinkStyle>

        <FilledButtonStyle disabled={!newHabit || !days.length}>
          Salvar
        </FilledButtonStyle>
      </CreateNewHabitControlsStyle>
    </CreateNewHabitFormStyle>
  );
};

export default CreateNewHabit;
