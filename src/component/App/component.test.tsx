import { render, screen } from "@testing-library/react";
import App from ".";
import React from "react";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/iu);
  expect(linkElement).toBeInTheDocument();
});
