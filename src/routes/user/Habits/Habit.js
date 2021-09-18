import React, { useContext } from "react";
import styled from "styled-components";

import Days from "../../../components/Days";

import trash from "../../../assets/trash.svg";
import { deleteHabit } from "../../../services/api";
import { UserContext } from "../../../context/Context";

export default function Habit({ habit }) {
  const { user } = useContext(UserContext);

  function removeHabit(habitId) {
    deleteHabit(user.token, habitId);
  }

  return (
    <Box>
      <h3>{habit.name}</h3>
      <Days days={habit.days} />
      <Trash
        onClick={() => removeHabit(habit.id)}
        src={trash}
        alt="Lixeira para remoção de hábitos"
      />
    </Box>
  );
}

const Box = styled.li`
  margin-top: 15px;
  padding: 15px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;

  h3 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #666;
    margin-bottom: 15px;
  }
`;

const Trash = styled.img`
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;
