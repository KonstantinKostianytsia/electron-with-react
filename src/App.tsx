import React from "react";
import { RootNavigator } from "./navigation/RootNavigation";
import { ThemeProvider } from "./styles/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

export default App;
