import { render, screen } from "@testing-library/react";
import Header from "../../components/common/doctor/Header";

test("render Menue icon", async() => {
    render(<Header open={false} />);
    const iconButtonElement = screen.getByLabelText("open drawer");
    expect(iconButtonElement).toBeInTheDocument();
});
test("hide Menue icon", async() => {
    render(<Header open={true} />);
    const iconButtonElement = screen.queryByLabelText("open drawer");
    expect(iconButtonElement).not.toBeVisible();
});
test("renders logout button", async() => {
    render(<Header open={true} />);
    const logoutButton = screen.getByRole("button");
    expect(logoutButton).toBeInTheDocument();
});
