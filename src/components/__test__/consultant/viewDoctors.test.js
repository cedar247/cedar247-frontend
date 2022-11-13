import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import Doctor from "../../ward/Doctor"

test("render doctor details", async() => {
    render(<Doctor
                name="Hasini Vijayarathna"
                category="Senior Registrar"
                contactNumber="0711118889"
                wardNumber="4"
                wardName="ICU"
            />)

    const doctor = screen.getByText("Senior Registrar")
    expect(doctor).toBeInTheDocument()

    const nameCheck = screen.getByText("Hasini Vijayarathna")
    expect(nameCheck).toBeInTheDocument()
})
