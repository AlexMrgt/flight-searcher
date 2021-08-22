import moment from "moment";
import { ParsedFlight } from '../utils/interfaces/flightInterfaces';
import { FlightData } from "./interfaces/flightInterfaces";


const parseFlights = (data: FlightData | null) => {
  if (!data?.Dates) return null;

  const dates = data.Dates.OutboundDates;
  const quote = data.Quotes[0];
  const places = data.Places;

  const parseOriginId = (id: number) => {
    let origin: string = '';

    places.forEach(place => {
      if (place.PlaceId === id) origin = `${place.CityName} (${place.IataCode})`
    })

    return origin;
  }

  const parseDestinationId = (id: number) => {
    let destination: string = '';

    places.forEach(place => {
      if (place.PlaceId === id) destination = `${place.CityName} (${place.IataCode})`
    })

    return destination;
  }

  const parseDateAndTime = (rawDate: string) => {

    const date = moment(rawDate).format('DD MMMM, YYYY');

    return { date, time: '12:00' };
  }

  let flights: ParsedFlight[] = [];

  dates.forEach((date) => {

    const flight = {
      prise: date.Price,
      dateAndTime: parseDateAndTime(date.PartialDate),
      carrier: 'Aeroflot',
      origin: parseOriginId(quote.OutboundLeg.OriginId),
      destination: parseDestinationId(quote.OutboundLeg.DestinationId),
      id: quote.QuoteId,
    }
    flights.push(flight);
  })

  return flights;
}

const parseDateToRequestFormat = (date:Date) => {
  const res = moment(date).format('YYYY-MM-DD');
  return res;
}

export {
  parseFlights,
  parseDateToRequestFormat
}

