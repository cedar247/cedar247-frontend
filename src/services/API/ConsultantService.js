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

const changePassword = (details) => {
    return axios.post(APIEndpoint + "/consultant/changePassword", details);
}; 

const  viewCalendar = (details) => {
    return axios.post(APIEndpoint + "/consultant/viewCalendar", details);
}; 

const getRequests = (details) => {
    return axios.post(APIEndpoint + "/consultant/getRequests", details);
}; 

const setRequestResponse = (details) => {
    return axios.post(APIEndpoint + "/consultant/setRequestResponse", details);
};
const consulantService = {
    setDeadline,
    getDoctors,
    getDoctorCategories,
    createSchedule,
<<<<<<< HEAD
    changePassword,
    viewCalendar,
=======
    viewCalendar,,
    getRequests,
    setRequestResponse,
>>>>>>> 1e066f800e877e50f481b0b84e3cca329faff393
};

export default consulantService;
