import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const setDeadline = (details) => {
    return axios.post(APIEndpoint + "/consultant/set-deadline", details);
}; 

const getDoctors = () => {
    return axios.get(APIEndpoint + "/consultant/doctors")
};

const getDoctorCategories = () => {
    return axios.get(APIEndpoint + "/consultant/get-categories");
}

const createSchedule = (requirements) => {
    return axios.post(APIEndpoint + "/consultant/create-schedule", requirements);
}

const  viewCalendar = (details) => {
    return axios.post(APIEndpoint + "/consultant/viewCalendar", details);
}; 

const consulantService = {
    setDeadline,
    getDoctors,
    getDoctorCategories,
    createSchedule,
    viewCalendar,
};

export default consulantService;
