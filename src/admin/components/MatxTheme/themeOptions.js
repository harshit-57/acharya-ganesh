import { components } from './components';

const themeOptions = {
    typography: {
        fontSize: 14,
        body1: { fontSize: '14px' },
    },

    status: { danger: '#f44336' },
    components: { ...components },
};

export default themeOptions;
