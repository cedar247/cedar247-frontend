import { render, screen } from "@testing-library/react";
import Calendar from "../../layouts/DoctorCalendar";

test("render calendar changing button", async() => {
    render(<Calendar />);
    const checkboxElement = screen.getByLabelText("Display All doctors Schedule");
    expect(checkboxElement).toBeInTheDocument();
});
