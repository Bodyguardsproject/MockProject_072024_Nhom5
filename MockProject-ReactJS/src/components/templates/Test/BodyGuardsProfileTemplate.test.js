/* eslint-disable react/display-name */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import { BodyGuardsProfileTemplate } from "../BodyGuardsProfileTemplate";
import userEvent from "@testing-library/user-event";


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

describe("BodyGuardsProfileTemplate", () => {
  test("renders the profile information", () => {
    render(<BodyGuardsProfileTemplate />);
    expect(screen.getByText("My profile")).toBeInTheDocument();
    expect(screen.getByText("Manage profile information to secure your account")).toBeInTheDocument();

    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("johnsmith@example.com")).toBeInTheDocument();
  });

  test("changes to edit mode when clicking Edit button", async () => {
    render(<BodyGuardsProfileTemplate />);

    userEvent.click(screen.getByText("Edit"));

    await waitFor(() => {
      expect(screen.getByText("Edit profile")).toBeInTheDocument();
    });

    expect(screen.getByLabelText("Firstname")).not.toBeDisabled();
    expect(screen.getByLabelText("Lastname")).not.toBeDisabled();
  });

});
