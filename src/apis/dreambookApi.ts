import axios from "axios";

//const GH_TOKEN = process.env.REACT_APP_GH_TOKEN

const baseUrl = process.env.REACT_APP_API_URL;
const DREAM_TOKEN = process.env.REACT_APP_DREAM_TOKEN;

export const dreambookApi = axios.create({
    baseURL: `${ baseUrl }`,
    headers:{
        Authorization: `Bearer ${DREAM_TOKEN}`
    }
});