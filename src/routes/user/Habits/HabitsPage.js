import React, { useContext, useState } from "react";
import { Container } from "../../../styles/global";
import { UserContext } from "../../../context/Context";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styled from "styled-components";

export default function HabitsPage() {
  const [habits, setHabits] = useState([]);

  const { user } = useContext(UserContext);

  return (
    <>
      <Header />
      <Content>
        <Container>
          <TitleBox>
            <h2>Meus hábitos</h2>
            <button>+</button>
          </TitleBox>
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

const Content = styled.main`
  position: fixed;
  width: 100%;
  height: calc(100vh - 140px);
  top: 70px;
  left: 0;
  background-color: #f2f2f2;
  overflow-y: scroll;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  button,
  h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
  }

  h2 {
    color: #126ba5;
  }

  button {
    color: #fff;
    display: grid;
    place-items: center;
    width: 40px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background-color: #52b6ff;
    cursor: pointer;
  }
`;

const WithoutHabits = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #666;
`;
