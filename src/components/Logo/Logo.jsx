import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/TrackItLogo.svg';

const Logo = function () {
  return <LogoStyle src={logo} />;
};

const LogoStyle = styled.img`
  display: block;
  width: 180px;
  margin: 0 auto;
`;

export default Logo;
