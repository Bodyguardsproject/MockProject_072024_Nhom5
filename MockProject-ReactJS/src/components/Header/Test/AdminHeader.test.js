/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderAdmin from "../HeaderAdmin";
import { BrowserRouter as Router } from "react-router-dom";

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    })),
  });
});

describe("HeaderAdmin Component", () => {
  test("renders all icons and avatar", () => {
    render(
      <Router>
        <HeaderAdmin />
      </Router>
    );
    expect(screen.getByTestId("logout-icon")).toBeInTheDocument();
    expect(screen.getByTestId("question-icon")).toBeInTheDocument();
    expect(screen.getByTestId("settings-icon")).toBeInTheDocument();
    expect(screen.getByTestId("bell-icon")).toBeInTheDocument();
    expect(screen.getByTestId("user-avatar")).toBeInTheDocument();
  });

  test("renders search input with correct placeholder", () => {
    render(
      <Router>
        <HeaderAdmin />
      </Router>
    );
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("placeholder", "Search...");
  });
});
