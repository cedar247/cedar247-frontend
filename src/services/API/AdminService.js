import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const addConsultant = (details) => {
    return axios.post(APIEndpoint + "/admin/consultant", details);
}; 


const addDoctor = (details) => {
    return axios.post(APIEndpoint + "/admin/doctor", details);
}; 


export default {
    addConsultant,
    addDoctor
}


