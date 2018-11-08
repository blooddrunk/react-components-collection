import * as React from 'react';

import styled from '../../theme';
import { Shape } from './Shape';
import { Paragraph } from './Paragraph';
import { Header } from './Header';

const StyledCard = styled.section`
  display: grid;
  grid-template-columns: 32px minmax(300px, 1fr) 200px;
  grid-template-rows: auto auto 32px;
  grid-template-areas:
    'header header media'
    'main main media'
    'avatar description media';
  grid-column-gap: 24px;
  grid-row-gap: 16px;
`;

const StyledHeader = styled(Header)`
  grid-area: header;
`;

const Media = styled(Shape).attrs({
  shape: 'square',
  size: '200px',
})`
  grid-area: media;
`;

const Main = styled(Paragraph).attrs({
  line: 3,
})`
  grid-area: main;
`;

const Avatar = styled(Shape).attrs({
  shape: 'circle',
  size: '100%',
})`
  grid-area: avatar;
`;

const Description = styled(Shape)`
  grid-area: description;
  align-self: center;
`;

export const Card: React.SFC = () => (
  <StyledCard>
    <StyledHeader />
    <Main />
    <Avatar />
    <Description />
    <Media />
  </StyledCard>
);
