// import { ThemeProvider as _ThemeProvider } from '@emotion/react';
import { ReactNode } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { createTheme } from 'src/styles';
import { SchemeType } from 'src/types';

import { Global } from './Global';

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <NextThemesProvider attribute="data-theme">{children}</NextThemesProvider>
  );
};
