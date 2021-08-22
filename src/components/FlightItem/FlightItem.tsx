import React, { SyntheticEvent } from 'react'
import FlightInfo from '../FlightInfo/FlightInfo';
import { ParsedFlight } from '../../utils/interfaces/flightInterfaces';
import './FlightItem.css';

interface Props {
  data: ParsedFlight,
  onLike: (evt: SyntheticEvent) => void
}

const FlightItem:React.FC<Props> = ({
  data,
  onLike
}) => {

  const handleLikeClick = (evt:SyntheticEvent) => {
    onLike(evt);
  }

return (
  <article className='flight'>
    <FlightInfo
      info={data}
    />
    <button
      className='flight__like '
      onClick={handleLikeClick}
    />
    <p className='flight__price'>
      Price: <span className='flight__price-value'>{data.prise} &#8381;</span>
    </p>
  </article>
)
}

export default FlightItem;
