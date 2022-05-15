import { useState, useEffect } from 'react';

// Date Picker
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme
import { DateRangePicker } from 'react-date-range';
import { differenceInDays } from 'date-fns';

// Context
import { UseReservation } from '../../store/ReservationProvider';

// Components

const DatePicker = () => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const { reservation, updateReservation } = UseReservation();

  useEffect(() => {
    const { checkIn, checkOut } = reservation;
    if (checkIn && checkOut) {
      setDates([
        {
          startDate: checkIn,
          endDate: checkOut,
          key: 'selection',
        },
      ]);
    }
  }, []);

  if (!dates) {
    return <div>Loading</div>;
  }

  return (
    <DateRangePicker
      className='date-picker'
      onChange={({ selection }) => {
        setDates([selection]);
        updateReservation({
          checkIn: selection.startDate,
          checkOut: selection.endDate,
          nights: differenceInDays(selection.endDate, selection.startDate),
        });
      }}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      retainEndDateOnFirstSelection={true}
      months={2}
      rangeColors={['#0e687c', '#8a7955']}
      ranges={dates}
      direction='horizontal'
    />
  );
};

export default DatePicker;
