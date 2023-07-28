/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("should toggle between Register and Login modes on button click", () => {
    render(<LoginForm />);

    // Initially, the form should be in Login mode
    expect(screen.getByText("Sign in")).toBeInTheDocument();

    // Click the "Register" button to toggle mode
    fireEvent.click(screen.getByText("Register"));

    // After clicking the button, the form should switch to Register mode
    expect(screen.getByText("Sign up")).toBeInTheDocument();

    // Click the "Login" button to toggle mode back to Login
    fireEvent.click(screen.getByText("Login"));

    // After clicking the button again, the form should switch back to Login mode
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
