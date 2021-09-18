import React from "react";
import styled from "styled-components";

export default function Days({ days, setDays, isClickable }) {
  function selectDay(day) {
    if (isClickable) {
      if (!days.includes(day)) {
        setDays([...days, day]);
      } else {
        setDays(days.filter((d) => d !== day));
      }
    }
  }

  return (
    <DaysList>
      {["D", "S", "T", "Q", "Q", "S", "S"].map((day, key) => (
        <Day
          key={key}
          fontColor={days.includes(key) ? "#fff" : "#dbdbdb"}
          backgroundColor={days.includes(key) ? "#cfcfcf" : "transparent"}
          pointer={isClickable ? "pointer" : "default"}
          onClick={(e) => selectDay(key)}
        >
          {day}
        </Day>
      ))}
    </DaysList>
  );
}

const DaysList = styled.ul`
  display: flex;
  gap: 3.375px;
`;

const Day = styled.li`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: ${(props) => props.fontColor};

  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => props.pointer};
`;
