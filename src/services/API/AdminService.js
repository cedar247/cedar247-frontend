import config from "../../config.json"
const axios = require('axios');


// const APIEndpoint = config.DOMAIN_NAME + "/api";
const APIEndpoint = "/api";

const addConsultant = (details) => {
    return axios.post(APIEndpoint + "/admin/consultant", details);
}; 


const addDoctor = (details) => {
    return axios.post(APIEndpoint + "/admin/doctor", details);
}; 

const addUser = (details) => {
    return axios.post(APIEndpoint + "/admin/user", details);
}; 


const getConsultants = () => {
    return axios.get(APIEndpoint + "/admin/getConsultants");
}; 

const getWards = () => {
    return axios.get(APIEndpoint + "/admin/");
}; 


const getAllWards = () => {
    return axios.get(APIEndpoint + "/admin/getAll");
}; 

const getAllDocs = (_id) => {
    console.log("All doc in controller");
    return axios.post(APIEndpoint + "/admin/getAllDocs",_id);
}; 
const getAllCons = (_id) => {
    console.log("All doc in controller");
    return axios.post(APIEndpoint + "/admin/getAllCons",_id);
}; 
const addWard = (ward, token) => {
    return axios.post(
        APIEndpoint + "/admin/add-ward", ward,
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
        );
}
const getDoctorTypes = (values) => {
    console.log(values);
    console.log('in admin service');
    const val = {WardID: values}
    return axios.post(APIEndpoint + "/admin/getDoctorTypes",val);
}; 

const DeleteWard =  (id) => {
    console.log(id);
    return axios.post(APIEndpoint + "/admin/DeleteWard",id);
}; 
const DoLogin = (details) => {
    return axios.post(APIEndpoint + "/admin/dologin",details);
}; 


const getShifts = (token) => {
    return axios.get(
        APIEndpoint+ "/admin/get-shifts",
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
    )
}

const setConstraints = (constraints, token) => {
    return axios.post(
        APIEndpoint + "/admin/set-constraints",
        constraints,
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
    )
}

const getNumConsecGroups = (token) => {
    return axios.get(
        APIEndpoint + "/admin/get-num-consec-groups",
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
    )
}

const setConsecGroups = (consecGroups, token) => {
    return axios.post(
        APIEndpoint + "/admin/set-consec-groups", 
        consecGroups,
        { 
            headers: {"Authorization" : `Bearer ${token}`} 
        }
    )
}

const getAllShifts = () => {
    return axios.get(
        APIEndpoint + "/admin/get-all-shifts"
    )
}

const adminService = {
    addWard,
    getShifts,
    addConsultant,
    addDoctor,
    getConsultants,
    getWards,
    getAllWards,
    getDoctorTypes,
    addUser,
    DoLogin,
    setConstraints,
    getNumConsecGroups,
    setConsecGroups,
    getAllDocs,
    getAllCons,
    DeleteWard,
    getAllShifts
}

export default adminService;
