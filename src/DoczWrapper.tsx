import * as React from 'react';

import { ThemeProvider, theme } from './theme';

const DoczWrapper: React.SFC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default DoczWrapper;
