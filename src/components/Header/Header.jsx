import React, {
  useContext,
} from 'react';

import {
  ContainerStyle,
} from '../../styles/Styles';

import {
  HeaderStyle,
  ProfilePhotoStyle,
} from './HeaderStyles';

import UserContext from '../../context/Context';

const Header = function () {
  const {
    user,
  } = useContext(UserContext);

  return (
    <HeaderStyle>
      <ContainerStyle>
        <h1>TrackIt</h1>

        <ProfilePhotoStyle
          src={user.image}
          alt="Sua foto de perfil"
        />
      </ContainerStyle>
    </HeaderStyle>
  );
};

export default Header;
