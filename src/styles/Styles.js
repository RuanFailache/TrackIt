import styled from 'styled-components';
import themes from './themes';

export const ContainerStyle = styled.div`
  display: block;
  width: 325px;
  margin: 0 auto;
  padding: 100px 0 30px;
  position: relative;
  box-sizing: border-box;
`;

export const TextInputStyle = styled.input`
  display: block;
  width: 100%;
  padding: 7.5px;
  border: solid 1px ${themes.lightGray};
  border-radius: 5px;
  box-sizing: border-box;

  font-size: 20px;
  line-height: 24px;
  color: ${themes.darkGray};

  &::placeholder {
    color: ${themes.lightGray};
  }
`;

export const FilledButtonStyle = styled.button`
  display: block;
  padding: 7.5px 15px;
  border: none;
  border-radius: 5px;
  background-color: ${themes.lightBlue};
  cursor: pointer;
  transition: .6s;

  &, & > a {
    font-size: 20px;
    line-height: 24px;
    color: ${themes.white};
  }

  &:disabled {
    opacity: .7;
  }
`;

export const TitleBoxStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  h2 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: #126ba5;
  }
`;

export const LinkStyle = styled.button`
  display: block;
  border: none;
  background: transparent;
  margin: 0 auto;
  cursor: pointer;

  &, & > a {
    font-size: 14px;
    line-height: 17px;
    color: ${themes.lightBlue};
  }
`;
