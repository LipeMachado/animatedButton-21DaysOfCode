import { useState } from 'react';
import { SwitchButton } from "./components/SwitchButton";
import { GlobalStyle } from "./styledGlobal";
import { ThemeProvider } from 'styled-components';

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SwitchButton toogleTheme={toggleTheme} />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App