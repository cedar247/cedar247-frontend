import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/pages/Signin';
import PersistentDrawerLeft from './components/pages/Persistant';
import ConsultantDashboard from './components/pages/ConsultantDashboard'
import DoctorDashboard from './components/pages/DoctorDashboard'
import CreateSchedule from './components/pages/CreateSchedule'
import DefineRequirements from './components/pages/defineRequirements'
import ChangePassword from './components/pages/ChangePassword'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CreateSchedule/> */}
    {/* <ConsultantDashboard/> */}
    {/* <DoctorDashboard/> */}
    {/* <PersistentDrawerLeft /> */}
    <DefineRequirements />
    {/* <ChangePassword/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
