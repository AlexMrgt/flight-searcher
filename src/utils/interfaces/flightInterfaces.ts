interface Carrier {
  CarrierId: number,
  Name: string
}

interface Currencie {
  Code: string,
  DecimalDigits: number,
  DecimalSeparator: string,
  RoundingCoefficient: number,
  SpaceBetweenAmountAndSymbol: boolean,
  Symbol: string,
  SymbolOnLeft: boolean,
  ThousandsSeparator: string,
}

interface Place {
  CityId: string,
  CityName: string,
  CountryName: string,
  IataCode: string,
  Name: string,
  PlaceId: number,
  SkyscannerCode: string,
  Type: string,
}

interface Quote {
  QuoteId: number,
  Direct: boolean,
  MinPrice: number,
  QuoteDateTime: string,
  OutboundLeg: {
    CarrierIds: number[],
    DepartureDate: string,
    DestinationId: number,
    OriginId: number,
  }
}

interface OutboundDate {
  PartialDate: string,
  QuoteIds: number[],
  Price: number,
  QuoteDateTime: string,
}

interface Dates {
  OutboundDates: OutboundDate[]
}

export interface FlightData {
  Carriers: Carrier[],
  Currencies: Currencie[],
  Places: Place[],
  Quotes: Quote[],
  Dates: Dates,
}

export interface ParsedFlight {
  prise: number,
  carrier: string,
  origin: string,
  destination: string,
  id: number,
  dateAndTime: {
    date: string,
    time: string
  }
}
