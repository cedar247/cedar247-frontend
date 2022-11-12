import { render, screen } from "@testing-library/react";
import ViewCard from "../../components/layouts/viewcard";
import AdminDashboard from "../../components/pages/Persistant";

test("renders logout button", async() => {
    render(<AdminDashboard />);
    const logoutButton = screen.getByRole("button");
    expect(logoutButton).toBeInTheDocument();
});
test("View Card", async() => {
    const ward = {name : "ICU",_id :'001100202020202020' }
    render(<ViewCard ward={ward}  />);
    const logoutButton = screen.getByText("ICU");
    expect(logoutButton).toBeInTheDocument();
});
