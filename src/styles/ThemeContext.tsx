import React, { PropsWithChildren } from "react";
import { Theme } from "../types/interface";

interface IThemeProviderProps {
  option?: boolean;
}

export interface IThemeContextValue {
  mode: Theme;
  setMode: (mode: Theme) => void;
}

const defaultValue: IThemeContextValue = {
  mode: "system",
  setMode: (mode: Theme) => {
    window.themeController.setTheme(mode);
  },
};

export const ThemeContext = React.createContext(null);
export const ThemeProvider = (
  props: PropsWithChildren<IThemeProviderProps>
) => {
  return (
    <ThemeContext.Provider value={defaultValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
