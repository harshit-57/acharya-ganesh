import { themes } from '../MatxTheme/initThemes';
import layout1Settings from './Layout1/Layout1Settings';

export const MatxLayoutSettings = {
    activeLayout: 'layout1',
    activeTheme: 'whiteBrown',
    perfectScrollbar: false,

    themes: themes,
    layout1Settings,

    secondarySidebar: {
        show: true,
        open: false,
        theme: 'slateDark1',
    },
    footer: {
        show: true,
        fixed: false,
        theme: 'whiteBrownDark',
    },
};

export const MatxLayoutUpdateSettings = (settings = {}) => {
    MatxLayoutSettings.activeLayout = settings.activeLayout || 'layout1';
    MatxLayoutSettings.activeTheme = settings.activeTheme || 'whiteBrown';
    MatxLayoutSettings.perfectScrollbar = settings.perfectScrollbar || false;
    MatxLayoutSettings.themes = settings.themes || themes;
    MatxLayoutSettings.layout1Settings =
        settings.layout1Settings || layout1Settings;
    MatxLayoutSettings.secondarySidebar = settings.secondarySidebar || {
        show: true,
        open: false,
        theme: 'slateDark1',
    };
    MatxLayoutSettings.footer = settings.footer || {
        show: true,
        fixed: false,
        theme: 'whiteBrownDark',
    };
};
