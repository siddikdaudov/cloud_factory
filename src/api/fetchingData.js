import { API_URL } from "../constants";

export const fetchingData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
