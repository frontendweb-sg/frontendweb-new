"use client";
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

type Theme = "light" | "dark";
interface IThemeContext {
	theme: Theme;
	changeTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext>({
	theme: "light",
	changeTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>("light");

	const changeTheme = useCallback(() => {
		let newTheme: Theme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	}, [theme]);

	const state = useMemo(
		() => ({
			theme,
			changeTheme,
		}),
		[theme, changeTheme]
	);

	return (
		<ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	return useContext(ThemeContext);
};

export default ThemeProvider;
