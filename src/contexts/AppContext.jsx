import { createContext, useEffect, useReducer } from 'react';
import { APIHelper } from '../util/APIHelper';
import { Images } from '../util/images';

const initialState = {
    theme: {
        Name: 'dafault',
        Images: Images.default,
        Colors: {},
    },
};

const themes = ['theme1', 'theme2'];

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { theme } = action.payload;
            localStorage.setItem('theme', JSON.stringify(theme.Name));
            return {
                ...state,
                theme: {
                    ...theme,
                    Images: Images[theme?.Name] || Images.default,
                },
            };
        }

        default:
            return state;
    }
};

const AppContext = createContext({
    ...initialState,
});

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getTheme = async () => {
        try {
            const res = await APIHelper.getThemes({ status: 1, pageSize: 1 });
            if (res?.data?.success && res?.data?.data?.length > 0) {
                dispatch({
                    type: 'INIT',
                    payload: {
                        theme: res?.data?.data[0],
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTheme();
    }, []);

    useEffect(() => {
        if (state?.theme?.Colors && Object.keys(state?.theme?.Colors)?.length) {
            Object.entries(state?.theme?.Colors).forEach(([key, value]) => {
                document.documentElement.style.setProperty(
                    `--color-${key}`,
                    value
                );
            });
        }
    }, [state?.theme]);

    return (
        <AppContext.Provider
            value={{
                ...state,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
