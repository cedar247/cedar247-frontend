import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const setDeadline = (details) => {
    return axios.post(APIEndpoint + "/consultant/set-deadline", details);
}; 

const getDoctors = () => {
    return axios.get(APIEndpoint + "/consultant/doctors")
};

const consulantService = {
    setDeadline,
    getDoctors
};

export default consulantService;
