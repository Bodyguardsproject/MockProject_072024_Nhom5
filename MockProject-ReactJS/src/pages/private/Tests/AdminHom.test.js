/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminHome from "../AdminHome";

import * as router from "react-router"; // Giả lập useLocation để test URL

// Mock các component con
jest.mock('../../../components/Header/HeaderAdmin', () => () => <div>Mocked HeaderAdmin</div>);
jest.mock("../../../components/ComponentAdmin/index", () => ({
  SidebarAdmin: () => <div>Mocked SidebarAdmin</div>,
}));

// Mock các component trong tab
jest.mock("../index", () => ({
  AdminDashBoard: () => <div>Mocked AdminDashBoard</div>,
  AdminServices: () => <div>Mocked AdminServices</div>,
  AdminAccounts: () => <div>Mocked AdminAccounts</div>,
}));

describe("AdminHome Component", () => {
  it("renders layout with logo, sidebar and header", () => {
    render(
      <BrowserRouter>
        <AdminHome />
      </BrowserRouter>
    );

    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("Mocked SidebarAdmin")).toBeInTheDocument();
    expect(screen.getByText("Mocked HeaderAdmin")).toBeInTheDocument();
  });

  it("renders AdminDashBoard by default when no tab is provided", () => {
    jest.spyOn(router, "useLocation").mockReturnValue({
      search: "",
    });

    render(
      <BrowserRouter>
        <AdminHome />
      </BrowserRouter>
    );

    expect(screen.getByText("Mocked AdminDashBoard")).toBeInTheDocument();
  });

  it("renders AdminServices when tab=services in URL", () => {
    jest.spyOn(router, "useLocation").mockReturnValue({
      search: "?tab=services",
    });

    render(
      <BrowserRouter>
        <AdminHome />
      </BrowserRouter>
    );

    expect(screen.getByText("Mocked AdminServices")).toBeInTheDocument();
  });

  it("renders AdminAccounts when tab=accounts in URL", () => {
    jest.spyOn(router, "useLocation").mockReturnValue({
      search: "?tab=accounts",
    });

    render(
      <BrowserRouter>
        <AdminHome />
      </BrowserRouter>
    );

    expect(screen.getByText("Mocked AdminAccounts")).toBeInTheDocument();
  });
});
