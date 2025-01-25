import React, { createContext, useState, useContext } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [showNav, setShowNav] = useState(false);
    return (
        <NavContext.Provider value={{ showNav, setShowNav }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = () => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useNav must be used within a NavProvider');
    }
    return context;
};
