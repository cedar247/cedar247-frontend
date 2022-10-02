import { render, screen } from "@testing-library/react";
import Header from "../../components/common/doctor/SideBar";

test("render define Button", async() => {
    render(<Header open={true} home = {true} chanpass ={true} defreq ={true} />);
    const buttonElement = screen.getByText("Define Requirements");
    expect(buttonElement).toBeInTheDocument();
});
test("renders change Password button", async() => {
    render(<Header open={true} home = {true} chanpass ={true} defreq ={false} />);
    const buttonElement = screen.getByText("Change password"); //screen.getByRole("button",{name:"Change password"});
    expect(buttonElement).toBeInTheDocument();
});
