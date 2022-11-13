import { render, screen, fireEvent } from "@testing-library/react";
import Shift from "../../ward/Shift";
import WardDetails from "../../ward/WardDetails"

const handleShiftChange = (e, index, name) => {}
const shifts = [
    {
        "name":"Morning Shift",
        "startTime":"08:00",
        "endTime":"13:00"
    },
    {
        "name":"Evening Shift",
        "startTime":"13:00",
        "endTime":"19:00"
    }
]

const allShifts = [
    {
        name: "Morning Shift",
        _id: 1
    },
    {
        name: "Evening Shift",
        _id: 4
    }
]

const wardDetails = {}
const handleChange = (prop) => (event) => {};
const handleDoctorCategories = (event) => {};
const doctorCategories = {
    "Senior Registrar": true,
    "Registrar": true,
    "Senior Home Officer": true,
    "Home Officer": true,
    "Medical Officer": true
}

test("render Shift", async() => {

    render(<Shift
                shifts={shifts}
                allShifts={allShifts}
                index={1}
                addShift={false}
                handleShiftChange={handleShiftChange}
            />)

    const shift = screen.getByText("Select a shift")
    expect(shift).toBeInTheDocument()

    // fireEvent.change(screen.getByTestId('select'), { target: { value: "0" } })
    // const shiftName = screen.getByText("Morning Shift")
    // expect(shiftName).toBeInTheDocument()
})

test("render Ward Details", async() => {
    render(
        <WardDetails
            shifts={shifts}
            addShift={false}
            allShifts={allShifts}
            wardDetails={wardDetails}
            handleChange={handleChange}
            handleShiftChange={handleShiftChange}
            handleDoctorCategories={handleDoctorCategories}
            doctorCategories={doctorCategories}
        />
    )

    const ward = screen.getByLabelText("Name of the Ward")
    expect(ward).toBeInTheDocument()
})