import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../components/App";

test("renders App component", () => {
  act(() => {
    render(<App />);
  });
  expect(screen.getByText("Jamie Wilson")).toBeInTheDocument();
});
