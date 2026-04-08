import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({children}: {children: React.ReactNode}) {
    const [isDark, setIsDark] = useLocalStorage('theme-dark', false)
    
    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode: isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error('useTheme must be used inside ThemeProvider')
    }
    return context
}
