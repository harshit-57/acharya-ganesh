import { createTheme } from '@mui/material';
import { themeColors } from './themeColors';
import themeOptions from './themeOptions';

function createMatxThemes() {
    let themes = {};

    Object.entries(themeColors).forEach(([key, value]) => {
        themes[key] = createTheme({ ...themeOptions, ...value });
    });
    return themes;
}

export const themes = createMatxThemes();
