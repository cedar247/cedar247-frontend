import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/pages/Signin';
import AdminDashboard from './components/pages/Persistant';
import AddWard from './components/pages/AddWard';
import CreateSchedule from './components/pages/CreateSchedule';
import SetDeadline from './components/pages/SetDeadline.jsx';
import DoctorsView from './components/pages/DoctorsView';
import DoctorDashboard from './components/pages/DoctorDashboard'
import SetConstraint from './components/pages/setConstraints';
import { createTheme, ThemeProvider } from '@material-ui/core';
import PopUp from './components/layouts/Popup';
import ChangePassword from './components/layouts/test';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersistentDrawerLeft from './components/pages/Persistant.jsx'

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
            <Route exact path="/" element={<LoginForm/>}></Route>
            <Route path="/wards" element={<PersistentDrawerLeft/>}></Route>
            <Route path="/add-wards" element={<AddWard/>}></Route>
            <Route path="/create-schedule" element={<CreateSchedule/>}></Route>
            <Route path="/set-deadline" element={<SetDeadline/>}></Route>
            <Route path="/view-doctors" element={<DoctorsView/>}></Route>
            <Route path="/DoctorDashboard" element={<DoctorDashboard/>}></Route>
            <Route path="/Popup" element={<PopUp />}></Route>
            <Route path="/changepwd" element={<ChangePassword />}></Route>
            <Route path='/set-constraints' element={<SetConstraint/>}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
      <ToastContainer
        position="top-right"
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
