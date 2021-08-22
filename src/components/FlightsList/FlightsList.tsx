import React, { SyntheticEvent } from 'react'
import FlightItem from '../FlightItem/FlightItem';
import { ParsedFlight } from '../../utils/interfaces/flightInterfaces';
import './FlightsList.css';


interface Props {
  data: ParsedFlight[],
  onLike: (evt: SyntheticEvent) => void
}

const FlightsList: React.FC<Props> = ({
  data,
  onLike
}) => {

  return (
    <ul className='flight-list'>
      {data.map((item) => (
        <li key={item.id}>
          <FlightItem
            onLike={onLike}
            data={item} />
        </li>
      ))}
    </ul>
  )
}

export default FlightsList;
