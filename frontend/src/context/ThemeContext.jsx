"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const THEME_KEY = "devtrail_theme";

const getSavedTheme = () => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem(THEME_KEY) || "dark";
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getSavedTheme);

    // Apply theme class to <html>
    const applyTheme = (value) => {
        const root = document.documentElement;
        let resolved = value;

        if (value === "system") {
            resolved = window.matchMedia("(prefers-color-scheme: light)").matches
                ? "light"
                : "dark";
        }

        if (resolved === "light") {
            root.classList.add("light");
            root.classList.remove("dark");
        } else {
            root.classList.add("dark");
            root.classList.remove("light");
        }

        root.setAttribute("data-theme", value);
    };

    // Apply theme on mount
    useEffect(() => {
        applyTheme(theme);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Listen to system theme changes when theme === "system"
    useEffect(() => {
        if (theme !== "system") return;

        const mq = window.matchMedia("(prefers-color-scheme: light)");

        const handler = () => applyTheme("system");

        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [theme]);

    const changeTheme = (value) => {
        setTheme(value);
        localStorage.setItem(THEME_KEY, value);
        applyTheme(value);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
