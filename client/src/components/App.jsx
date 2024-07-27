// client/src/components/App.jsx
import React from "react";
import Home from "./Home";
import ThemeSwitcher from "./ThemeSwitcher";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          {/* Add your navigation items here */}
          <ThemeSwitcher />
        </nav>
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
