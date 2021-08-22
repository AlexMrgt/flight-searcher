import axios, { AxiosInstance, AxiosResponse } from "axios";
import { FlightData } from "./interfaces/flightInterfaces";

class FlightsApi {

  client: AxiosInstance;
  apiKey: string;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      responseType: 'json',
    });

    this.apiKey = '0dfe943aa8msh21169ba71f0ec50p1c4f30jsn01bfa640131a';
  }

  async getFlights(date: string) {

    const res: AxiosResponse<FlightData> = await this.client.get(`/RU/RUB/en-US/SVO-sky/JFK-sky/${date}`, {
      headers: {
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
        'x-rapidapi-key': this.apiKey,
        'Accept': 'application/json',
      },
    });

    return res.data;
  }

  // other methods

}


export default FlightsApi;

