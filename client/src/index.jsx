// client/src/index.jsx
import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";

const App = lazy(() => import("./components/App"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
