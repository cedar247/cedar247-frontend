import { render, screen } from "@testing-library/react";
import CreateSchedule from "../../pages/CreateSchedule";
import { BrowserRouter } from 'react-router-dom';
import ShiftDetails from "../../schedule/ShiftDetails"

// test("render create schedule title", async() => {
//     render(
//     <BrowserRouter>
//         <CreateSchedule/>
//     </BrowserRouter>);

//     const title = screen.queryByText("Create Schedule")
//     expect(title).toBeInTheDocument();
// })

test("render shift details", async() => {
    render(<ShiftDetails
        shiftName="Morning Shift"
        doctorCategories={["Registrar", "Senior Registrar"]}
    />)

    const shiftDetails = screen.getByText("Morning Shift:")
    expect(shiftDetails).toBeInTheDocument()
})