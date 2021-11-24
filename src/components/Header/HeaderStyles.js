import styled from 'styled-components';
import themes from '../../styles/themes';

export const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${themes.darkBlue};
  z-index: 1;

  div {
    display: flex;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
`;

export const ProfilePhotoStyle = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
