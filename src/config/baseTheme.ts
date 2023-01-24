import { ThemeOptions } from '@mui/material';
import React from 'react';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        baseBorder: string;
        drawerWidth: number;
    }
}


