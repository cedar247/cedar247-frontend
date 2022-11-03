import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const defineRequirements = (details) => {
    return axios.post(APIEndpoint + "/doctor/defineRequirements", details);
}; 

const changeclendar = (details) => {
    return axios.post(APIEndpoint + "/doctor/changeClendar", details);
}; 

const changePassword = (details) => {
    return axios.post(APIEndpoint + "/doctor/changePassword", details);
}; 

const getShifts = (details) => {
    return axios.post(APIEndpoint + "/doctor/getShifts", details);
}; 

const getDoctorShifts = (details) => {
    return axios.post(APIEndpoint + "/doctor/getDoctorShifts", details);
};

const setSwappingShifts = (details) => {
    return axios.post(APIEndpoint + "/doctor/setSwappingShifts", details);
}; 

const getRequests = (details) => {
    return axios.post(APIEndpoint + "/doctor/getRequests", details);
}; 

const setRequestResponse = (details) => {
    return axios.post(APIEndpoint + "/doctor/setRequestResponse", details);
}; 

export default {
    defineRequirements,
    changeclendar,
    changePassword,
    getShifts,
    getDoctorShifts,
    setSwappingShifts,
    getRequests,
    setRequestResponse,
}
