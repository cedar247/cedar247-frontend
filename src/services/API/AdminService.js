import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const addConsultant = (details) => {
    return axios.post(APIEndpoint + "/admin/consultant", details);
}; 


const addDoctor = (details) => {
    return axios.post(APIEndpoint + "/admin/doctor", details);
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

const getShifts = () => {
    return axios.get(APIEndpoint+ "/admin/get-shifts")
}


const adminService = {
    addWard,
    getShifts,
    addConsultant,
    addDoctor,
    getConsultants,getWards,getAllWards
}

export default adminService;
