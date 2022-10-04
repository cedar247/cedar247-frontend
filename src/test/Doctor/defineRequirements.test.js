import { render, screen } from "@testing-library/react";
import Defnerequirements from "../../components/layouts/defineRequirements";

test("render input date", async() => {
    render(<Defnerequirements  />);
    const dateElement = screen.getByLabelText("date");
    expect(dateElement).toBeInTheDocument();
});
test("render checkbox morning icon", async() => {
    render(<Defnerequirements  />);
    const checkboxElement = screen.getByLabelText("(8 am -1 pm)");
    expect(checkboxElement).toBeInTheDocument();
});
test("render checkbox evening icon", async() => {
    render(<Defnerequirements  />);
    const checkboxElement = screen.getByLabelText("(1 pm - 7 pm)");
    expect(checkboxElement).toBeInTheDocument();
});
test("hide checkbox night icon", async() => {
    render(<Defnerequirements />);
    const checkboxElement = screen.getByLabelText("(7 pm - 8 am)");
    expect(checkboxElement).not.toBeVisible();
});
test("renders submit button", async() => {
    render(<Defnerequirements  />);
    const buttonElement = screen.getByText("Add");
    expect(buttonElement).toBeInTheDocument();
});
