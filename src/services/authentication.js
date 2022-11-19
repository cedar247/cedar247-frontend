import config from "../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";
// const APIEndpoint = "/api";

const DoLogin = (details) => {
    console.log('HI');
    return axios.post(APIEndpoint + "/auth/dologin",details);
}; 

const authentication = {
    DoLogin
}
export default authentication;