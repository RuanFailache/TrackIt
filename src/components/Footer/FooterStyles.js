import styled from 'styled-components';

export const FooterStyle = styled.footer`
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0;
  left: 0;
  background-color: white;
`;

export const FooterNavListStyle = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 25px;
`;

export const FooterProgressBarStyle = styled.div`
  position: fixed;
  width: 91px;
  bottom: 15px;
  left: calc(50% - 45px);
  cursor: pointer;

  strong {
    font-size: 18px;
    line-height: 22px;
    color: #fff;
  }
`;
