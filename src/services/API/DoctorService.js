import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const defineRequirements = (details) => {
    return axios.post(APIEndpoint + "/doctor/defineRequirements", details);
}; 

const changeclendar = (details) => {
    return axios.post(APIEndpoint + "/doctor/changeClendar", details);
}; 

export default {
    defineRequirements,
    changeclendar,
}
