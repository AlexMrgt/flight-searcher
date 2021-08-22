import axios from "axios";

const config = {
  headers: {
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': '0dfe943aa8msh21169ba71f0ec50p1c4f30jsn01bfa640131a',
    'Accept': 'application/json',
  },
};

async function getFlightsRequest(date:string) {

  const URL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-US/SVO-sky/JFK-sky/${date}`;
  const res = await axios.get(URL, config);
  return res.data;
}

export {
  getFlightsRequest,
}
