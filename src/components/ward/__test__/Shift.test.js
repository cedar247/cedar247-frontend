import { render, screen } from "@testing-library/react";
import Shift from "../Shift";

test("render Shift text field", async () => {
    render(<Shift />);
    const textElement = screen.getByLabelText("Shift");
    expect(textElement).toBeInTheDocument();
});

test("render start text field", async () => {
    render(<Shift />);
    const textElement = screen.getByLabelText("Start");
    expect(textElement).toBeInTheDocument();
});

test("render end text field", async () => {
    render(<Shift />);
    const textElement = screen.getByLabelText("End");
    expect(textElement).toBeInTheDocument();
});