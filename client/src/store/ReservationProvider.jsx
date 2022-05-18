import { createContext, useContext, useState } from 'react';

// Services
import { checkoutRequest } from '../services/hotels';
import axios from 'axios';

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

  const checkout = async () => {
    // Stripe data structure for checkout
    // TODO: Try finding a better way to do this
    const checkoutReservation = {
      reservationInfo: [
        {
          id: reservation.hotelId,
          name: reservation.hotelName,
          quantity: reservation.nights,
          currency: reservation.currency,
          image: reservation.image,
          price: reservation.nightPrice,
        },
      ],
    };

    const { data } = await checkoutRequest(checkoutReservation);

    window.open(data.url, '_blank'); // open checkout page in new tab because yet I don't save data to local/session storage
    return;
  };

  return (
    <ReservationContext.Provider
      value={{ reservation, updateReservation, checkout }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export { UseReservation };

export default ReservationProvider;
