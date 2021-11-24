import React from 'react';
import themes from '../../styles/themes';

import {
  DayItemStyle,
  DaysListStyle,
} from './DaysListStyles';

const DaysList = function ({ days, setDays, isClickable }) {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const selectDay = (day) => {
    if (isClickable) {
      if (!days.includes(day)) {
        setDays([...days, day]);
      } else {
        setDays(days.filter((d) => d !== day));
      }
    }
  };

  return (
    <DaysListStyle>
      {weekDays.map((day, key) => (
        <DayItemStyle
          key={day}
          onClick={() => selectDay(key)}
          color={days.includes(key) ? themes.white : themes.lightGray}
          bgColor={days.includes(key) ? themes.lightGray : themes.white}
        >
          {day[0]}
        </DayItemStyle>
      ))}
    </DaysListStyle>
  );
};

export default DaysList;
