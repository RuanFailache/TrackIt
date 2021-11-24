import React from 'react';

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

import {
  ContainerStyle, LinkStyle,
} from '../../styles/Styles';

import {
  FooterStyle,
  FooterNavListStyle,
  FooterProgressBarStyle,
} from './FooterStyles';

import progressBarBuild from './progressBarBuild';

const Footer = function () {
  return (
    <FooterStyle>
      <ContainerStyle>
        <nav>
          <FooterNavListStyle>
            <li>
              <LinkStyle>
                Hábitos
              </LinkStyle>
            </li>

            <FooterProgressBarStyle>
              <CircularProgressbarWithChildren
                value={66}
                background
                backgroundPadding={6}
                styles={buildStyles(progressBarBuild)}
              >
                <strong>Hoje</strong>
              </CircularProgressbarWithChildren>
            </FooterProgressBarStyle>

            <li>
              <LinkStyle>
                Histórico
              </LinkStyle>
            </li>
          </FooterNavListStyle>
        </nav>
      </ContainerStyle>
    </FooterStyle>
  );
};

export default Footer;
