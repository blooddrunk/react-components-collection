import * as React from 'react';

import styled, { keyframes } from '../../theme';

export type ShapeProps = {
  shape?: 'line' | 'square' | 'circle';
  /** for `line` */
  height?: string;
  /** for `line` */
  width?: string;
  /** for `square` and `circle` */
  size?: string;
  /** in seconds */
  duration?: number;
  /** pass down className */
  className?: string;
};

const loadingKeyframe = keyframes`
  0% {
    background-position: 150% 0;
  }
  100% {
    background-position: -150% 0;
  }
`;

const StyledShape = styled<{ duration: number }, 'div'>('div')`
  background-color: ${props => props.theme.skeleton.color};
  background-image: linear-gradient(
    to right,
    ${props => props.theme.skeleton.color},
    ${props => props.theme.skeleton.highlightColor},
    ${props => props.theme.skeleton.color}
  );
  background-size: 200% 100%;
  background-repeat: no-repeat;
  background-position: 150% 0;
  line-height: 1;
  animation: ${loadingKeyframe} ${props => props.duration}s ease-in-out infinite;
`;

export const Shape: React.SFC<ShapeProps> = ({
  shape,
  height,
  width,
  size,
  duration,
  className,
}) => {
  let style;
  switch (shape) {
    case 'square':
      style = {
        height: size,
        width: size,
      };
      break;
    case 'circle':
      style = {
        height: size,
        width: size,
        borderRadius: '100%',
      };
      break;
    default:
      style = {
        height,
        width,
      };
      break;
  }

  return <StyledShape style={style} duration={duration!} className={className} />;
};

Shape.defaultProps = {
  shape: 'line',
  height: '1em',
  width: '100%',
  size: '100%',
  duration: 2,
};
