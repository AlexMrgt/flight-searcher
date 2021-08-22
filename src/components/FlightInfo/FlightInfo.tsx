import React from 'react'
import { ParsedFlight } from '../../utils/interfaces/flightInterfaces';
import './FlightInfo.css';

interface Props {
  info: ParsedFlight,
}

const FlightInfo: React.FC<Props> = ({
  info,
}) => {
  return (
    <div className='flight-info'>
      <p className='flight-info__airports' >{info.origin} &rarr; {info.destination}</p>
      <p className='flight-info__date-time'>{info.dateAndTime.date} <span className='flight-info__datetime-separator'>&ndash;</span> {info.dateAndTime.time} </p>
      <p className='flight-info__carrier'>{info.carrier}</p>
    </div>
  )
}

export default FlightInfo;
