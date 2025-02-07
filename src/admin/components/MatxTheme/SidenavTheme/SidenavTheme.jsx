import { ThemeProvider, useTheme } from '@mui/material';
import { MatxLayoutSettings as settings } from '../../MatxLayout/settings';

const SidenavTheme = ({ children }) => {
    const theme = useTheme();
    const sidenavTheme =
        settings.themes[settings.layout1Settings.leftSidebar.theme] || theme;

    return <ThemeProvider theme={sidenavTheme}>{children}</ThemeProvider>;
};

export default SidenavTheme;
