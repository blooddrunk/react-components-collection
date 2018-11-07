import * as React from 'react';

import styled, { keyframes } from '../../theme';

export interface WordProps {
  height: number;
  width: number;
  /* in seconds */
  duration?: number;
}

const loadingKeyframe = (width: number) => keyframes`
  0% {
    background-position: -${width}px 0;
  }
  100% {
    background-position: calc(${width}px + 100%) 0;
  }
`;

const StyledWord = styled<WordProps, 'span'>('span').attrs({
  style: ({ height, width }: WordProps) => ({
    height,
    width,
    borderRadius: height / 2,
  }),
})`
  display: inline-block;
  margin: 2px 4px 2px 0;
  background-color: ${props => props.theme.skeleton.color};
  background-image: linear-gradient(
    to right,
    ${props => props.theme.skeleton.color},
    ${props => props.theme.skeleton.highlightColor},
    ${props => props.theme.skeleton.color}
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: -${props => props.width}px 100%;
  line-height: 1;
  animation: ${props => loadingKeyframe(props.width)} ${props => props.duration}s ease-in-out
    infinite;
`;

export const Word: React.SFC<WordProps> = props => <StyledWord {...props} />;

Word.defaultProps = {
  duration: 2,
};
