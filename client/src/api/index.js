import axios from "axios";

const url = "https://ilcoffee.herokuapp.com";

export const fetchCafes = () => axios.get(`${url}/getCafes`);
export const updateCafes = () => axios.get(`${url}/updateCafes`);
