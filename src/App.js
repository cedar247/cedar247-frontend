import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/pages/Signin';
import PersistentDrawerLeft from './components/pages/Persistant';
import AddWard from './components/pages/AddWard';
import CreateSchedule from './components/pages/CreateSchedule';
import SetDeadline from './components/pages/SetDeadline.jsx';
import DoctorsView from './components/pages/DoctorsView';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm/>}></Route>
          <Route path="/wards" element={<PersistentDrawerLeft/>}></Route>
          <Route path="/add-wards" element={<AddWard/>}></Route>
          <Route path="/create-schedule" element={<CreateSchedule/>}></Route>
          <Route path="/set-deadline" element={<SetDeadline/>}></Route>
          <Route path="/view-doctors" element={<DoctorsView/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
