import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/pages/Signin';
import AdminDashboard from './components/pages/Persistant';
import AddWard from './components/pages/AddWard';
import CreateSchedule from './components/pages/CreateSchedule';
import SetDeadline from './components/pages/SetDeadline.jsx';
import DoctorsView from './components/pages/DoctorsView';
import ConsultantDashboard from './components/pages/ConsultantDashboard';
import DoctorDashboard from './components/pages/DoctorDashboard';
import ViewExchangeShifts from './components/pages/viewExchangeShifts';
import ConsultantViewSwappingShifts from './components/pages/ConsultantViewSwappingShifts';
import Persistant from './components/pages/Persistant';
import SetConstraint from './components/pages/setConstraints';
import { createTheme, ThemeProvider } from '@material-ui/core';
import PopUp from './components/layouts/Popup';
import ChangePassword from './components/layouts/ConsultantChangePassword.jsx';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersistentDrawerLeft from './components/pages/Persistant.jsx';
import SetConsecutiveGroups from './components/pages/SetConsecutiveGroups';
import { LandingPage } from './components/pages/LandingPage';

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
            <Route path='/set-consecutive-groups' element={<SetConsecutiveGroups/>}></Route>
            <Route path='/ConsultantViewSwappingShifts' element={<ConsultantViewSwappingShifts/>}></Route>
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
