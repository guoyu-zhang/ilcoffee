import * as api from "../api/index.js";

export const getCafes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCafes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
