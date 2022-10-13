import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const addConsultant = (details) => {
    return axios.post(APIEndpoint + "/admin/consultant", details);
}; 


const addDoctor = (details) => {
    return axios.post(APIEndpoint + "/admin/doctor", details);
}; 

const addUser = (details) => {
    return axios.post(APIEndpoint + "/admin/user", details);
}; 


const getConsultants = () => {
    return axios.get(APIEndpoint + "/admin/getConsultants");
}; 

const getWards = () => {
    return axios.get(APIEndpoint + "/admin/");
}; 


const getAllWards = () => {
    return axios.get(APIEndpoint + "/admin/getAll");
}; 

const addWard = (ward) => {
    return axios.post(APIEndpoint + "/admin/add-ward", ward);
}
const getDoctorTypes = () => {
    return axios.get(APIEndpoint + "/admin/getDoctorTypes");
}; 

const DoLogin = (details) => {
    return axios.post(APIEndpoint + "/admin/dologin",details);
}; 


const getShifts = () => {
    return axios.get(APIEndpoint+ "/admin/get-shifts")
}

const setConstraints = (constraints) => {
    return axios.post(APIEndpoint + "/admin/set-constraints", constraints)
}


const adminService = {
    addWard,
    getShifts,
    addConsultant,
    addDoctor,
    getConsultants,
    getWards,
    getAllWards,
    getDoctorTypes,
    addUser,
    DoLogin,
    setConstraints
}

export default adminService;
