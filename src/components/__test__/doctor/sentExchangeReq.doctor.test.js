import { render, screen } from "@testing-library/react";
import SentExchangeRequests from '../../layouts/sentExchangeRequests.jsx';

test("render Exchange From Date", async() => {
    const list =[{
            id:1,
            name:"Vinojith",
            fromDate:"2022-11-12",
            fromShiftName:"evening",
            fromShift:"13:00 - 19:00",
            toDate:"2022-11-13",
            toShiftName:"night",
            toShift:"19:00 - 08:00",
            status : 4,
    },{
            id:2,
            name:"hasini",
            fromDate:"2022-11-13",
            fromShiftName:"morning",
            fromShift:"8:00 - 13:00",
            toDate:"2022-11-14",
            toShiftName:"night",
            toShift:"19:00 - 08:00",
            status : 4,
        }]
    render(<SentExchangeRequests toRequests = {list}/>);
    const fromdate = screen.getAllByLabelText("sentCards");
    expect(fromdate.length).toBe(2);
});
