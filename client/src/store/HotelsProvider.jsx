import { createContext, useContext, useState, useEffect } from 'react';

// Services
import { fetchHotels } from '../services/hotels';

// create context
const HotelsContext = createContext();

const UseHotels = () => useContext(HotelsContext);

const HotelsProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [hotelsLoading, setHotelsLoading] = useState(true);
  const [hotelsCurrentPage, setHotelsCurrentPage] = useState(1);
  const [hotelsPerPage, setHotelsPerPage] = useState(30);

  // update hotels
  const updateHotels = async () => {
    fetchHotels(hotelsCurrentPage, hotelsPerPage)
      .then(({ data }) => {
        // TODO: change to paginated
        setHotels((prevHotels) => [...prevHotels, ...data]);
        setHotelsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setHotelsError(err);
      });
  };

  // find hotel by id
  const findHotelById = (id) => {
    console.log(id);
    return hotels.find((hotel) => hotel._id === id);
  };

  useEffect(() => {
    const fakeDelay = setTimeout(updateHotels, 2000);
    return () => clearTimeout(fakeDelay);
  }, []);

  return (
    <HotelsContext.Provider value={{ hotels, hotelsLoading, findHotelById }}>
      {children}
    </HotelsContext.Provider>
  );
};

export { UseHotels };

export default HotelsProvider;
