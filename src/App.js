import { createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PopUp from './components/layouts/Popup';
import ChangePassword from './components/layouts/ConsultantChangePassword';
import AccessDenied from './components/pages/AccessDenied';
import AddWard from './components/pages/AddWard';
import ConsultantDashboard from './components/pages/ConsultantDashboard';
import ConsultantViewSwappingShifts from './components/pages/ConsultantViewSwappingShifts';
import CreateSchedule from './components/pages/CreateSchedule';
import DoctorDashboard from './components/pages/DoctorDashboard';
import DoctorsView from './components/pages/DoctorsView';
import { LandingPage } from './components/pages/LandingPage';
import { default as AdminDashboard, default as Persistant } from './components/pages/Persistant';
// import SetConsecutiveGroups from './components/pages/SetConsecutiveGroups';
import SetConstraint from './components/pages/setConstraints';
import SetDeadline from './components/pages/SetDeadline.jsx';
import LoginForm from './components/pages/Signin';
import ViewExchangeShifts from './components/pages/viewExchangeShifts';

const theme = createTheme({
  palette: {
    primary: {
      main: '#465AF7'
    },
    secondary: {
      main: "#7858D7"
    }
  },
  typography: {
    fontFamily: 'Quicksand'
  }
})


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}></Route>
            <Route exact path="/signIn" element={<LoginForm/>}></Route>
            <Route path="/wards" element={<AdminDashboard/>}></Route>
            <Route path="/add-wards" element={<AddWard/>}></Route>
            <Route path="/create-schedule" element={<CreateSchedule/>}></Route>
            <Route path="/set-deadline" element={<SetDeadline/>}></Route>
            <Route path="/view-doctors" element={<DoctorsView/>}></Route>
            <Route path="/ConsultantDashboard" element={<ConsultantDashboard/>}></Route>
            <Route path="/DoctorDashboard" element={<DoctorDashboard/>}></Route>
            <Route path="/Persistant" element={<Persistant/>}></Route>
            <Route path="/Popup" element={<PopUp />}></Route>
            <Route path="/ConsultantChangepwd" element={<ChangePassword />}></Route>
            <Route path='/set-constraints' element={<SetConstraint/>}></Route>
            <Route path='/ViewExchangeShifts' element={<ViewExchangeShifts/>}></Route>
            {/* <Route path='/set-consecutive-groups' element={<SetConsecutiveGroups/>}></Route> */}
            <Route path='/ConsultantViewSwappingShifts' element={<ConsultantViewSwappingShifts/>}></Route>
            <Route exact path="/restricted" element={<AccessDenied/>}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        theme="colored"
        newestOnTop
        closeOnClick
        rtl={false}
        draggable={false}
      />
    </>
  );
}

export default App;
