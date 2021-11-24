import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  ListHabitsStyle,
} from './HabitsStyles';

import HabitBox from './HabitBox';

import UserContext from '../../context/Context';

import {
  getHabits,
} from '../../services/api';

const ListHabits = function () {
  const [habits, setHabits] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      (async () => {
        try {
          const result = await getHabits(user.token);

          setHabits(
            [...result.data].reverse(),
          );
        } catch (err) {
          console.log(err.response);
        }
      })();
    }

    return () => {
      isActive = false;
    };
  }, [user, habits]);

  return habits.length > 0
    ? (
      <ListHabitsStyle>
        {habits.map((habit) => (
          <HabitBox key={habit.id} habit={habit} />
        ))}
      </ListHabitsStyle>
    ) : (
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
        para começar a trackear!
      </p>
    );
};

export default ListHabits;
