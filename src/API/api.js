import axios from "axios";


export const BASE_URL = "http://localhost:4000/api/"


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