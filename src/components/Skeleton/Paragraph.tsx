import * as React from 'react';

import styled from '../../theme';
import { Shape } from './Shape';

export type ParagraphProps = {
  line?: number;
  width?: string;
  /** spacing between lines */
  spacing?: number;
  /** pass down className */
  className?: string;
};

const StyledParagraph = styled<{ $width: string; $spacing: number }, 'div'>('div')`
  width: ${props => props.$width};
  padding-top: 16px;
  padding-bottom: 16px;

  > div + div {
    margin-top: ${props => props.$spacing}px;
  }
`;

export const Paragraph: React.SFC<ParagraphProps> = ({ line, width, spacing, className }) => (
  <StyledParagraph $spacing={spacing!} $width={width!} className={className}>
    {Array.from(Array(line).keys()).map(index => (
      <Shape key={index} width={index % 2 === 0 ? '100%' : '80%'} />
    ))}
  </StyledParagraph>
);

Paragraph.defaultProps = {
  line: 2,
  width: '100%',
  spacing: 8,
};
