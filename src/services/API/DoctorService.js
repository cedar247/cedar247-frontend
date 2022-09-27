import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const defineRequirements = (details) => {
    return axios.post(APIEndpoint + "/doctor/defineRequirements", details);
}; 

export default {
    defineRequirements
}
