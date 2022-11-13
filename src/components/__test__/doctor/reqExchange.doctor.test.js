import { render, screen } from "@testing-library/react";
import RequestExchangeShifts from "../../layouts/RequestExchangeShifts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

test("render Exchange From Date", async() => {
    render(<RequestExchangeShifts/>);
    // const items = screen.getAllByRole("listitem")
    const dateInput = screen.getByLabelText("Exchange-From-Date");
    expect(dateInput).toBeInTheDocument();
});
test("render Exchange To Date", async() => {
    render(<RequestExchangeShifts/>);
    const dateInput = screen.getByLabelText("Exchange-To-Date");
    expect(dateInput).toBeInTheDocument();
});
test("render Exchange To Shift", async() => {
    render(<RequestExchangeShifts/>);
    const shiftInput = screen.getByTestId("ExchangeToShift");
    expect(shiftInput).toBeInTheDocument();
});
test("render Exchange From Shift", async() => {
    render(<RequestExchangeShifts/>);
    const shiftInput = screen.getByTestId("ExchangeFromShift");
    expect(shiftInput).toBeInTheDocument();
});
test("render Exchange With Doctor", async() => {
    render(<RequestExchangeShifts/>);
    const Input = screen.getByTestId("ExchangeWithDoctor");
    expect(Input).toBeInTheDocument();
});
test("render submit button", async() => {
    render(<RequestExchangeShifts/>);
    const submitButton = screen.getByLabelText("submit");
    expect(submitButton).toBeInTheDocument();
});


