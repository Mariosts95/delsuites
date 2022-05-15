import { createContext, useContext, useState } from 'react';

const ReservationContext = createContext({});

const UseReservation = () => useContext(ReservationContext);

const ReservationProvider = ({ children }) => {
  const [reservation, setReservation] = useState({
    checkIn: null,
    checkOut: null,
    hotelId: null,
    roomId: null,
    nights: null,
    reachedCheckout: false,
  });

  // update reservation
  const updateReservation = async (newReservation) => {
    await setReservation((prev) => ({
      ...prev,
      ...newReservation,
    }));
  };

  return (
    <ReservationContext.Provider value={{ reservation, updateReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};

export { UseReservation };

export default ReservationProvider;
