import styled from "styled-components";

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

  h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: #126ba5;
  }
`;

const Days = styled.ul`
  display: flex;
  gap: 3.375px;
`;

const Day = styled.li`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #dbdbdb;

  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  cursor: pointer;
`;

export { Content, TitleBox, Days, Day };
