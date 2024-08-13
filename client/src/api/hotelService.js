import axios from "axios";

const API_URL = "http://localhost:5000/api/hotels";

export const getHotels = (location) => {
  return axios
    .get(API_URL, { params: { location } })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Error fetching hotels: " + error.message);
    });
};
