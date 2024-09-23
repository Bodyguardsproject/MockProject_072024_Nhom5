/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BodyGuardsTemplate } from "../BodyGuardsTemplate";

describe("BodyGuardsTemplate", () => {
  test("renders body guard names and roles", () => {
    render(<BodyGuardsTemplate />);
    expect(screen.getByText("Body guards")).toBeInTheDocument();

    const bodyguardElements = screen.getAllByText(/Nguyen van/i);
    expect(bodyguardElements).toHaveLength(4);

    expect(screen.getByText("Personal sercurity")).toBeInTheDocument();
    expect(screen.getByText("Event sercurity")).toBeInTheDocument();
    expect(screen.getByText("Asset sercurity")).toBeInTheDocument();
    expect(screen.getByText("Escort serivce")).toBeInTheDocument();
  });
});
