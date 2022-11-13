import { render, screen, fireEvent } from "@testing-library/react";
import DoctorDashboard from "../../pages/DoctorDashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const jwt = require('jsonwebtoken')


describe("Doctor Dashboard", () => {
    it("should display define requirements", async() => {
        localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNhYjU0YTlmZDUyOGI5NTMyYjhkNTkiLCJ0eXBlIjoiRE9DVE9SIiwiaWF0IjoxNjY4MzI0NzMzLCJleHAiOjE2OTk4NjA3MzN9.ZuNUlxR9ggwX9iD2QmtuvTZnoczMXDfEi37PqXy_1eA")
        render(<Router><DoctorDashboard /></Router>);
        const btnDefinereq = screen.getByLabelText("btn-DefReq");
        expect(btnDefinereq).toBeInTheDocument();
        fireEvent.click(btnDefinereq)
        const compDefiinerequirement = screen.getByTestId("definerequirement");
        expect(compDefiinerequirement).toBeInTheDocument();
    });
});
describe("Doctor Dashboard", () => {
    it("should display Request To Exchange Shifts", async() => {
        localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNhYjU0YTlmZDUyOGI5NTMyYjhkNTkiLCJ0eXBlIjoiRE9DVE9SIiwiaWF0IjoxNjY4MzI0NzMzLCJleHAiOjE2OTk4NjA3MzN9.ZuNUlxR9ggwX9iD2QmtuvTZnoczMXDfEi37PqXy_1eA")
        render(<Router><DoctorDashboard /></Router>);
        const btnReqexchan = screen.getByLabelText("btn-ExShift");
        expect(btnReqexchan).toBeInTheDocument();
        fireEvent.click(btnReqexchan)
        const compReqexchan = screen.getByTestId("Reqexchan");
        expect(compReqexchan).toBeInTheDocument();
    });
});
describe("Doctor Dashboard", () => {
    it("should display Doctor Change password", async() => {
        localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNhYjU0YTlmZDUyOGI5NTMyYjhkNTkiLCJ0eXBlIjoiRE9DVE9SIiwiaWF0IjoxNjY4MzI0NzMzLCJleHAiOjE2OTk4NjA3MzN9.ZuNUlxR9ggwX9iD2QmtuvTZnoczMXDfEi37PqXy_1eA")
        render(<Router><DoctorDashboard /></Router>);
        const btnChanPassword = screen.getByLabelText("btn-chanPassword");
        expect(btnChanPassword).toBeInTheDocument();
        fireEvent.click(btnChanPassword)
        const compChanPassword = screen.getByTestId("doctorChanPwd");
        expect(compChanPassword).toBeInTheDocument();
    });
});