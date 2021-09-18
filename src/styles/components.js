import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 375px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  display: block;
  margin: 60px auto 30px;
`;

const GoToPage = styled.button`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  font-family: "Lexenda Deca", sans-serif;
  color: #52b6ff;
  text-decoration: underline;

  display: block;
  margin: 0 auto;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Lexenda Deca", sans-serif;
  color: #dbdbdb;

  display: block;
  width: 100%;
  margin: 0 auto 7.5px;
  padding: 7.5px;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
`;

const Sender = styled.button`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  font-family: "Lexenda Deca", sans-serif;
  color: #fff;

  display: block;
  width: 100%;
  margin-bottom: 30px;
  padding: 7.5px 0;
  border: none;
  border-radius: 5px;
  background-color: #52b6ff;
  cursor: pointer;
`;

export { Container, Logo, GoToPage, Input, Sender };
