import axios from "axios";


export const BASE_URL = "http://localhost:4000/api/"


export const getUser = async (data) => {
    try {
        const response = await axios.post(BASE_URL+"user/getData",data);
        return response.data;
    } catch (error) {
        console.log("ERROR IN REGISTARTION")
    }
}

export const getUserTrips = async (data) => {
    try {
        const response = await axios.post(BASE_URL+"trips/getUserTrip",data);
        return response.data;
    } catch (error) {
        console.log("ERROR IN REGISTARTION")
    }
}

export const registerUser = async (data) => {
    try {
        const response = await axios.post(BASE_URL+"user/register",data);
        return response.data;
    } catch (error) {
        console.log("ERROR IN REGISTARTION")
    }
}

export const loginUser = async (data) => {
    try {
        const response = await axios.post(BASE_URL+"user/login",data);
        return response.data;
    } catch (error) {
        console.log("ERROR IN LOGIN")
    }
}

export const UpdateUser = async (data) => {
    try {
        const response = await axios.post(BASE_URL+"user/updateArtist",data);
        return response.data;
    } catch (error) {
        console.log("ERROR IN UPDATE")
    }
}

export const createTrip = async (data) => {
    try {
        const response = await axios.post(BASE_URL+"trips/create",data);
        return response.data;
    } catch (error) {
        console.log("ERROR IN UPDATE")
    }
}

export const sendText = async (data) => {
    try {
        const response = await axios.post(BASE_URL+"text/send",data);
        return response.data;
    } catch (error) {
        console.log("ERROR IN UPDATE")
    }
}