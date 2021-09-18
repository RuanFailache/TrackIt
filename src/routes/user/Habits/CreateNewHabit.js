import React, { useContext, useState } from "react";
import styled from "styled-components";

import Days from "../../../components/Days";

import { UserContext } from "../../../context/Context";

import { postNewHabit } from "../../../services/api";

export default function CreateNewHabit({ setIsCreatingNew }) {
  const [newHabit, setNewHabit] = useState("");
  const [days, setDays] = useState([]);

  const { user } = useContext(UserContext);

  function createHabit(e) {
    e.preventDefault();
    if (days.length === 0) {
      alert("Selecione ao menos um dia!");
      return;
    }
    postNewHabit(user.token, newHabit, days)
      .then(() => setIsCreatingNew(false))
      .catch((err) => console.log(err.response));
  }

  return (
    <NewHabitForm onSubmit={createHabit}>
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="nome do hábito"
        required
      />
      <Days days={days} setDays={setDays} isClickable={true} />
      <Controls>
        <Button
          fontColor="#52b6ff"
          bgColor="transparent"
          onClick={() => setIsCreatingNew(false)}
        >
          Cancelar
        </Button>
        <Button fontColor="#fff" bgColor="#52b6ff" type="submit">
          Salvar
        </Button>
      </Controls>
    </NewHabitForm>
  );
}

const NewHabitForm = styled.form`
  display: block;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;

  input[type="text"] {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #666;

    display: block;
    width: 100%;
    margin-bottom: 7.5px;
    padding: 7.5px 15px;
    border: solid 1px #dbdbdb;
    border-radius: 5px;
    box-sizing: border-box;
    outline: none;
  }

  input[type="text"]::placeholder {
    color: #dbdbdb;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 7.5px;
  margin-top: 30px;
`;

const Button = styled.button`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${(props) => props.fontColor};

  display: grid;
  place-items: center;
  width: 84px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;
