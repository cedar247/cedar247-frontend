import { render, screen } from "@testing-library/react";
import Doctor from '../Doctor';

test("render name of the doctor", async () => {
    render(<Doctor name="Hasini"/>);
    const textElement = screen.getByText("Hasini")
    expect(textElement).toBeInTheDocument();
});

test("render category", async () => {
    render(<Doctor category="Registrar"/>);
    const textElement = screen.getByText("Registrar")
    expect(textElement).toBeInTheDocument();
});

// test("render contact", async () => {
//     render(<Doctor contactNumber="0761112220"/>);
//     const textElement = screen.getByDisplayValue("Contact:  0761112220")
//     expect(textElement).toBeInTheDocument();
// });

test("render ward Number", async () => {
    render(<Doctor category={1}/>);
    const textElement = screen.getByText("Ward Number: 1")
    expect(textElement).toBeInTheDocument();
});