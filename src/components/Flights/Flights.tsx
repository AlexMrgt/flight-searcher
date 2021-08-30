import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { getFlights, getIsFlightsLoading } from '../../Redux/selectors/flights';
import FlightsList from '../FlightsList/FlightsList';
import Slider from '../Slider/Slider';
import DatePicker from '../DatePicker/DatePicker';
import { LogoutButton } from '../LogoutButton/LogoutButton';
import './Flights.css';
import Preloader from '../Preloader/Preloader';
import { loadFlightsStart } from '../../Redux/actions/flights';


interface Props {
  onLogout: () => void
}

const Flights: React.FC<Props> = ({
  onLogout,
}) => {
  const dispatch = useDispatch();

  const [isCalendarOpen, setCalendarStatus] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  const [liked, setLiked] = useState<number>(0);

  const handleLike = (evt: SyntheticEvent) => {
    const target = evt.currentTarget;

    if (target.classList.contains('flight__like_active')) {
      target.classList.remove('flight__like_active')
      setLiked((liked) => liked - 1)
    } else {
      target.classList.add('flight__like_active');
      setLiked((liked) => liked + 1)
    }
  }

  const handleFlightDateClick = () => {
    setCalendarStatus(true)
  }

  const handlePickDate = (date: Date) => {
    setDate(date)
    setCalendarStatus(false);
    dispatch(loadFlightsStart(date));
  }

  const flights = useSelector(getFlights);
  const isFlightsLoading = useSelector(getIsFlightsLoading);

  const renderFavoriteAmoutFlightsText = liked
    ? <p className='flights__fav-found-message'>Добавлено в избранное: <span className='flights__fav-counter'>{liked}</span> рейсов</p>
    : <p className='flights__fav-found-message'>Пока у вас нет ни одного рейса в Избранном</p>;


  return (
    <div className='flights'>
      <LogoutButton onLogout={onLogout} />
      <section className='flights__container'>
        <div className='flights__header'>
          <h2 className='flights__title'>
            Вылеты <span className='flights__direction-sign'>&rsaquo;</span> SVO - JFK
          </h2>
          <p onClick={handleFlightDateClick} className='flights__date'>
            {moment(date).format('DD MMMM YYYY')}
          </p>
        </div>
        <Slider />
        {renderFavoriteAmoutFlightsText}

        {isFlightsLoading
          ? <Preloader />
          : flights
            ? <FlightsList
              data={flights}
              onLike={handleLike}
            />
            : <p>Ни одного результата</p>
        }

        {isCalendarOpen &&
          <DatePicker
            isOpen={isCalendarOpen}
            onDatePick={handlePickDate}
            calendarValue={date}
          />
        }

      </section>
    </div>



  )
}

export default Flights;
