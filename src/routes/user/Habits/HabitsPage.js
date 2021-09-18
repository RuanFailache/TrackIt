import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../../styles/global";
import { UserContext } from "../../../context/Context";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styled from "styled-components";
import { getHabits } from "../../../services/api";
import { Content, TitleBox } from "../../../styles/user";
import CreateNewHabit from "./CreateNewHabit";

export default function HabitsPage() {
  const [habits, setHabits] = useState([]);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    let isActive = true;

    getHabits(user.token)
      .then((res) => (isActive ? setHabits(res.data) : null))
      .catch((err) => err.response);

    return () => {
      isActive = false;
    };
  }, [user, habits]);

  return (
    <>
      <Header />
      <Content>
        <Container>
          <TitleBox>
            <h2>Meus hábitos</h2>
            <CreateButton onClick={() => setIsCreatingNew(true)}>
              +
            </CreateButton>
          </TitleBox>

          {isCreatingNew ? <CreateNewHabit /> : null}

          {habits.length > 0 ? null : (
            <WithoutHabits>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </WithoutHabits>
          )}
        </Container>
      </Content>
      <Footer />
    </>
  );
}

const CreateButton = styled.button`
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  color: #fff;

  display: grid;
  place-items: center;
  width: 40px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: #52b6ff;
  cursor: pointer;
`;

const WithoutHabits = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #666;
  margin-top: 15px;
`;
