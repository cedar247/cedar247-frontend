import config from "../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const DoLogin = (details) => {
    return axios.post(APIEndpoint + "/auth/dologin",details);
}; 

export default {
    DoLogin
}