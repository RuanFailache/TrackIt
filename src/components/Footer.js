import React from "react";
import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import { Container } from "../styles/global";

export default function Footer() {
  return (
    <BottomBar>
      <Container>
        <nav>
          <Flex>
            <Option>Hábitos</Option>
            <CenterOption>
              <CircularProgressbarWithChildren
                value={66}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#52b6ff",
                  pathColor: "#fff",
                  trailColor: "transparent",
                })}
              >
                <strong>Hoje</strong>
              </CircularProgressbarWithChildren>
            </CenterOption>
            <Option>Histórico</Option>
          </Flex>
        </nav>
      </Container>
    </BottomBar>
  );
}

const BottomBar = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: white;
`;

const Flex = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Option = styled.li`
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  color: #52b6ff;
  padding: 9px;
`;

const CenterOption = styled.div`
  position: absolute;
  width: 91px;
  bottom: -5px;
  left: calc(50% - 45px);

  strong {
    font-size: 18px;
    line-height: 22px;
    color: #fff;
  }
`;
