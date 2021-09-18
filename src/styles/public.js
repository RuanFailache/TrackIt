import styled from "styled-components";

const Logo = styled.img`
  display: block;
  margin: 60px auto 30px;
`;

const GoToPage = styled.button`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
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
  color: #666;

  display: block;
  width: 100%;
  margin: 0 auto 7.5px;
  padding: 7.5px;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;

  ::placeholder {
    color: #dbdbdb;
  }
`;

const Sender = styled.button`
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
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

export { Logo, GoToPage, Input, Sender };
