import React, { useContext } from "react";
import styled from "styled-components";

import { Container } from "../styles/global";

import { UserContext } from "../context/Context";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <TopBar>
      <Container>
        <h1>TrackIt</h1>
        <img src={user.image} alt="Sua foto de perfil" />
      </Container>
    </TopBar>
  );
}

const TopBar = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #126ba5;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 36px;
    line-height: 40px;
    font-weight: 400;
    font-family: "Playball", cursive;
    color: white;
  }

  img {
    display: block;
    width: 40px;
    border-radius: 50%;
  }
`;
