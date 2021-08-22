import React, { ChangeEvent } from 'react'
import Calendar from 'react-calendar';

import './DatePicker.css';

interface Props{
  isOpen: boolean,
  calendarValue: Date,
  onDatePick: (date:Date)=>void;
}

const DatePicker:React.FC<Props> = ({
  onDatePick,
  calendarValue,
  isOpen,
}) => {

  const handleDateChange = (value:Date, evt: ChangeEvent<HTMLInputElement>) => {
    onDatePick(value);
  }

  return (
    <Calendar
      minDate={new Date()}
      className={`date-picker ${isOpen && 'date-picker_active'}`}
      value={calendarValue}
      onChange={handleDateChange}
    />
  )
}

export default DatePicker;
