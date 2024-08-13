import axios from "axios";

const API_URL = "http://localhost:5000/api/flights";

export const getFlights = (departure, arrival, departureDate, adults) => {
  return axios
    .get(API_URL, { params: { departure, arrival, departureDate, adults } })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error("Error fetching flights: " + error.message);
    });
};
