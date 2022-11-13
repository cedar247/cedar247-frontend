import { render, screen } from "@testing-library/react";
import Constraints from "../../ward/Constraints";
import ConsecutiveShifts from "../../ward/ConsecutiveShifts";

const shifts = [
    {
        _id: "1",
        name: "Morning Shift",
        startTime: "08:00",
        endTime: "13:00"
    }
]

const shiftTypes = [
    {
        id: "1",
        checked: true,
        vacation: 0
    }
]

const setShiftTypes = () => {}

const handleConsecutiveShifts = (e, innerIndex, outerIndex) => {}
const consecGroups = [
    [
        {
            id: "1",
            checked: true
        }
    ]
]

// test for rendering setConstraints
test("render set constraints", async() => {
    render(<Constraints
                shifts={shifts}
                shiftTypes={shiftTypes}
                setShiftTypes={setShiftTypes}
            />)

    const constraint = screen.getByLabelText("Morning Shift ( 08:00 - 13:00 )")
    expect(constraint).toBeInTheDocument()
})

// test for rendering consecutive shifts
test("render consecutive shifts", async() => {
    render(
        <ConsecutiveShifts
            shifts={shifts}
            handleConsecutiveShifts={handleConsecutiveShifts}
            outerIndex={0}
            consecutiveGroups={consecGroups}
        />
    )

    const consecShifts = screen.getByLabelText("Morning Shift ( 08:00 - 13:00 )")
    expect(consecShifts).toBeInTheDocument()
})