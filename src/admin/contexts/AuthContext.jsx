import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { MatxLoading } from '../components';
import { jwtDecode } from 'jwt-decode';
import { ADMINAPIHELPER } from '../../util/APIHelper';

const initialState = {
    admin: null,
    isInitialised: false,
    isAuthenticated: false,
    permission: {},
};

const isValidToken = (accessToken) => {
    if (!accessToken) return false;
    const decodedToken = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
};

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem('accessToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            const { isAuthenticated, admin } = action.payload;
            return { ...state, isAuthenticated, isInitialised: true, admin };
        }

        case 'LOGIN': {
            localStorage.setItem('admin', JSON.stringify(action.payload));
            return { ...state, isAuthenticated: true, admin: action.payload };
        }

        case 'LOGOUT': {
            return { ...state, isAuthenticated: false, admin: null };
        }
        case 'PERMISSION': {
            return { ...state, permission: action.payload };
        }

        default:
            return state;
    }
};

const AuthContext = createContext({
    ...initialState,
    method: 'JWT',
    login: () => {},
    logout: () => {},
    forgot_password: () => {},
    reset_password: () => {},
});

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const login = async (email, password) => {
        const response = await ADMINAPIHELPER.login(email, password);
        // console.log(response?.data);
        if (response?.data.success) {
            setSession(response?.data?.token);
            getAdminAndPermission();
            dispatch({ type: 'LOGIN', payload: response?.data?.data });
        }
    };

    const logout = () => {
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
    };

    const getAdminAndPermission = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                const res = await ADMINAPIHELPER.getAdmin({}, accessToken);

                if (res?.data?.data) {
                    localStorage.setItem(
                        'admin',
                        JSON.stringify(res?.data?.data)
                    );
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            admin: res?.data?.data,
                        },
                    });
                    dispatch({
                        type: 'PERMISSION',
                        // payload: JSON.parse(res?.data?.data?.RolePermissions),
                        payload: res?.data?.data?.RolePermissions,
                    });
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            admin: null,
                        },
                    });
                }
            } else {
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        admin: null,
                    },
                });
            }
        } catch (err) {
            console.error(err, 'error');
            dispatch({
                type: 'INIT',
                payload: {
                    isAuthenticated: false,
                    admin: null,
                },
            });
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                let admin = localStorage.getItem('admin');
                if (accessToken) {
                    admin = JSON.parse(admin);
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            admin,
                        },
                    });
                    getAdminAndPermission();
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            admin: null,
                        },
                    });
                }
            } catch (err) {
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        admin: null,
                    },
                });
            }
        })();
    }, []);

    // SHOW LOADER
    if (!state.isInitialised) return <MatxLoading />;

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
