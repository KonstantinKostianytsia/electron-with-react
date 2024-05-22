import React, { useContext, useEffect } from "react";
import { IThemeContextValue, ThemeContext } from "../styles/ThemeContext";

const HomeScreen = () => {
  // useEffect(() => {
  //   console.log(window.themeController.getTheme());
  // }, []);
  const themeContext = useContext<IThemeContextValue>(ThemeContext);
  return (
    <div>
      <p>{themeContext.mode}</p>
      <p>{navigator.language}</p>
    </div>
  );
};

export default HomeScreen;
