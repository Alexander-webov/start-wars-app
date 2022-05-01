import React, { useContext, useState } from 'react';

import { changeCSSVariables } from '../services/changeCSSVariables';

export const THEME_LIGTH = 'light'
export const THEME_DARK = 'dark'
export const THEME_NEITRAL = 'neitral'


const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(null);

    const change = (name) => {
        setTheme(name)
        changeCSSVariables(name)
    }

    return (
        <ThemeContext.Provider
            value={{ theme: theme, change: change }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
