import { createContext, useContext, useState } from 'react';

// create context
const ReservationContext = createContext();

const UseReservation = () => useContext(ReservationContext);

const ReservationProvider = ({ children }) => {
  const [reservation, setReservation] = useState({
    checkIn: null,
    checkOut: null,
    hotelId: null,
    roomId: null,
    days: null,
  });

  // update reservation
  const updateReservation = (newReservation) => {
    setReservation(newReservation);
  };

  return (
    <ReservationContext.Provider value={{ reservation, updateReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};

export { UseReservation };

export default ReservationProvider;
