import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import MonthPicker from "../../schedule/MonthPicker"
import { React } from "react"

test("render month picker", async() => {
    // const [values, setValues] = React.useState({
    //     month: "",
    //     year: "",
    //     deadline: ""
    // });
    const handleChange = (prop) => (event) => {
        // setValues({ ...values, [prop]: event.target.value });
      };
    render(<MonthPicker
        values={{
            year:2022,
            month:1
        }}
        handleChange={handleChange}
    />)

    const monthPicker = screen.getByText("Schedule Month:")
    expect(monthPicker).toBeInTheDocument()
})