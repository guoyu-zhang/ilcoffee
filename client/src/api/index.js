import axios from "axios";

const url = "http://localhost:5000";

export const fetchCafes = () => axios.get(`${url}/getCafes`);
export const updateCafes = () => axios.get(`${url}/updateCafes`);
