import config from "../../config.json";
const axios = require("axios")

const APIEndpoint = config.DOMAIN_NAME + "/api";

const addWard = (ward) => {
    return axios.post(APIEndpoint + "/admin/add-ward", ward);
}

const getShifts = () => {
    return axios.get(APIEndpoint+ "/admin/get-shifts")
}

const adminService = {
    addWard,
    getShifts
}

export default adminService;