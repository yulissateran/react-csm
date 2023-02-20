import LinkComponent from 'components/atoms/LinkComponent/Link';
import React from 'react';
import styled from 'styled-components';
import { WriteIcon } from '../../atoms/icons/WriteIcon/WriteIcon';
import TextComponent from '../../atoms/Text/Text';

const StyledLink = styled(LinkComponent)`
  margin-left: auto;
  display: inline;

  span {
    align-items: center;
    display: flex;
  }
`;

export const WriteLink: React.FC<{ to: string; text: string }> = ({ text, to }) => (
  <StyledLink to={to}>
    <TextComponent color="textLink">
      <WriteIcon />
      {text}
    </TextComponent>
  </StyledLink>
);
