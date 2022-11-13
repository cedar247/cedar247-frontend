import { render, screen } from "@testing-library/react";
import DoctorChangePassword from "../../layouts/DoctorChangePassword";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

test("render email", async() => {
    render(<DoctorChangePassword/>);
    const dateInput = screen.getByTestId("email");
    expect(dateInput).toBeInTheDocument();
});
test("render password", async() => {
    render(<DoctorChangePassword/>);
    const dateInput = screen.getByTestId("email");
    expect(dateInput).toBeInTheDocument();
});
test("render change password", async() => {
    render(<DoctorChangePassword/>);
    const dateInput = screen.getByTestId("email");
    expect(dateInput).toBeInTheDocument();
});
test("render submit button", async() => {
    render(<DoctorChangePassword/>);
    const submitButton = screen.getByLabelText("submit");
    expect(submitButton).toBeInTheDocument();
});


