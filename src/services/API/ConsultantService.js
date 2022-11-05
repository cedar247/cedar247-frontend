import config from "../../config.json"
const axios = require('axios');


const APIEndpoint = config.DOMAIN_NAME + "/api";

const setDeadline = (details, token) => {
    return axios.post(
        APIEndpoint + "/consultant/set-deadline",
        details,
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
    );
}; 

const getDoctors = (token) => {
    return axios.get(
        APIEndpoint + "/consultant/doctors",
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
    )
};

const getDoctorCategories = (token) => {
    return axios.get(
        APIEndpoint + "/consultant/get-categories",
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
    );
}

const createSchedule = (requirements, token) => {
    return axios.post(
        APIEndpoint + "/consultant/create-schedule", 
        requirements,
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
    );
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
    changePassword,
    viewCalendar,
    getRequests,
    setRequestResponse,
};

export default consulantService;
