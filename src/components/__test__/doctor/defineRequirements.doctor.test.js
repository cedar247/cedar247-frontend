import { render, screen } from "@testing-library/react";
import Defnerequirements from "../../layouts/defineRequirements";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

test("render date", async() => {
    render(<Defnerequirements
        shifts = {[{_id:1, name: "1"},{_id:2, name: "2"},{_id:3, name: "3"}]}
        />);
    const dateInput = screen.getByTestId("date");
    expect(dateInput).toBeInTheDocument();
});
test("render shift item", async() => {
    render(<Defnerequirements
        shifts = {[{_id:1, name: "1"},{_id:2, name: "2"},{_id:3, name: "3"}]}
        />);
    const shiftItems = screen.getAllByRole("checkbox");
    expect(shiftItems.length).toBe(3);
});
test("render submit button", async() => {
    render(<Defnerequirements
        shifts = {[{_id:1, name: "1"},{_id:2, name: "2"},{_id:3, name: "3"}]}
        />);
    // const items = screen.getAllByRole("listitem")
    const submitButton = screen.getByLabelText("submit");
    expect(submitButton).toBeInTheDocument();
});


