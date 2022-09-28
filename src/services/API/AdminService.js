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


export default {
    addConsultant,
    addDoctor,
    getConsultants,getWards
}


