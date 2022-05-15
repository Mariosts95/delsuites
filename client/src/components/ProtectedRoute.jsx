import { Navigate } from 'react-router-dom';

// Context
import { UseReservation } from '../store/ReservationProvider';

const ProtectedRoute = ({ children, checkIn }) => {
  const { reservation } = UseReservation();

  return reservation.reachedCheckout ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
