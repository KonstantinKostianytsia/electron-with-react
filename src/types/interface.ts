export type Theme = "dark" | "light" | "system";

export interface IThemeController {
  setTheme: (theme: Theme) => void;
  getTheme: () => Theme;
}

declare global {
  interface Window {
    themeController: IThemeController;
  }
}
