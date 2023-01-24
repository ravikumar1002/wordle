import { ThemeOptions } from '@mui/material';

declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        baseBorder: string;
        drawerWidth: number;
    }
}

const baseTheme: ThemeOptions = {
    components: {

    }
};

export default baseTheme;
