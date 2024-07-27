// client/src/components/App.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Home from "./Home";
import ThemeSwitcher from "./ThemeSwitcher";
import "./App.css";

const App = () => {
  const [isNightTheme, setIsNightTheme] = useState(false);

  const toggleTheme = () => {
    setIsNightTheme(!isNightTheme);
    document.body.style.backgroundColor = !isNightTheme
      ? "var(--bg-color-dark)"
      : "var(--bg-color-light)";
  };

  return (
    <div>
      <Helmet>
        <link
          rel="preload"
          href="/path/to/styles.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>{`<link rel="stylesheet" href="/path/to/styles.css" />`}</noscript>
      </Helmet>
      <header>
        <nav>
          <ThemeSwitcher onToggleTheme={toggleTheme} />
        </nav>
      </header>
      <main className={isNightTheme ? "night-theme" : ""}>
        <Home />
      </main>
    </div>
  );
};

export default App;
