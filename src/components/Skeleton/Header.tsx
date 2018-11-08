import * as React from 'react';

import styled from '../../theme';
import { Shape, ShapeProps } from './Shape';

export type HeaderProps = Pick<ShapeProps, 'height' | 'width' | 'duration'>;

export const Header: React.SFC<HeaderProps> = props => <Shape {...props} />;

Header.defaultProps = {
  height: '2em',
  width: '50%',
};
