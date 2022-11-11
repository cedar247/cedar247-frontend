import { render, screen } from "@testing-library/react";
import {SentCards} from '../../layouts/requestCards.jsx';

test("render Exchange From Date", async() => {
    render(<SentCards
            requestId={1}
            name={"Vinojith"}
            fromDate={2022-11-12}
            fromShiftName={"evening"}
            fromShift={"13:00 - 19:00"}
            toDate={"2022-11-13"}
            toShiftName={"night"}
            toShift={"19:00 - 08:00"}
            status = {4}
        />);
    const fromdate = screen.getByTestId("fromdate");
    expect(fromdate).toBeInTheDocument();
    const fromShiftName = screen.getByTestId("fromShiftName");
    expect(fromShiftName).toBeInTheDocument();
    const fromShift = screen.getByTestId("fromShift");
    expect(fromShift).toBeInTheDocument();
    const todate = screen.getByTestId("todate");
    expect(todate).toBeInTheDocument();
    const toShiftName = screen.getByTestId("toShiftName");
    expect(toShiftName).toBeInTheDocument();
    const toShift = screen.getByTestId("toShift");
    expect(toShift).toBeInTheDocument();
});
