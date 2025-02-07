import { CssBaseline, ThemeProvider } from '@mui/material';
import { MatxLayoutSettings as settings } from '../MatxLayout/settings';

const MatxTheme = ({ children }) => {
    let activeTheme = { ...settings.themes[settings.activeTheme] };

    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MatxTheme;
