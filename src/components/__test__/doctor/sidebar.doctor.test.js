import { render, screen } from "@testing-library/react";
import SideBar from "../../common/doctor/SideBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

test("render definerequirement icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const avatarDefinereq = screen.getByLabelText("avatar-DefReq");
    expect(avatarDefinereq).toBeInTheDocument();
});
test("render Request to Exchange shift icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const avatarReqexchan = screen.getByLabelText("avatar-ExShift");
    expect(avatarReqexchan).toBeInTheDocument();
});
test("render View Exchaging request icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const avatarViewExchan = screen.getByLabelText("avatar-ViewExchange");
    expect(avatarViewExchan).toBeInTheDocument();
});
test("render change assword icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const avatarChanPassword = screen.getByLabelText("avatar-chanPassword");
    expect(avatarChanPassword).toBeInTheDocument();
});

test("render definerequirement icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const btnDefinereq = screen.getByLabelText("btn-DefReq");
    expect(btnDefinereq).toBeInTheDocument();
});
test("render Request to Exchange shift icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const btnReqexchan = screen.getByLabelText("btn-ExShift");
    expect(btnReqexchan).toBeInTheDocument();
});
test("render View Exchaging request icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const btnViewExchan = screen.getByLabelText("btn-ViewExchange");
    expect(btnViewExchan).toBeInTheDocument();
});
test("render change assword icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const btnChanPassword = screen.getByLabelText("btn-chanPassword");
    expect(btnChanPassword).toBeInTheDocument();
});
test("render menue icon", async() => {
    render(<Router>
            <SideBar 
                open={true} 
                home={false} 
                chanpass={true} 
                defreq={true}  />
            </Router>);
    const avatarmenue = screen.getByLabelText("btn-menue");
    expect(avatarmenue).toBeInTheDocument();
});

