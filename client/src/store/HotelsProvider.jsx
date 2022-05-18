import { createContext, useContext, useState, useEffect } from 'react';

// Services
import { fetchHotels, fetchHotelsPages } from '../services/hotels';

// create context
const HotelsContext = createContext();

const UseHotels = () => useContext(HotelsContext);

const HotelsProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [hotelsLoading, setHotelsLoading] = useState(true);
  const [hotelsCurrentPage, setHotelsCurrentPage] = useState(1);
  const [hotelsPages, setHotelsPages] = useState(0);
  const [hotelsPerPage, setHotelsPerPage] = useState(30);

  // update hotels
  const updateHotels = async () => {
    fetchHotels(hotelsCurrentPage, hotelsPerPage).then(({ data }) => {
      setHotels(data);
      setHotelsLoading(false);
    });
  };

  // get hotel pages
  useEffect(() => {
    fetchHotelsPages(hotelsPerPage).then(({ data }) => {
      const pages = Math.ceil(data.hotelPages);
      setHotelsPages(pages);
    });
  }, []);

  // update hotels on page change
  useEffect(() => {
    setHotelsLoading(true);
    updateHotels();
  }, [hotelsCurrentPage]);

  const changeHotelsCurrentPage = (page) => {
    setHotelsCurrentPage(page);
  };

  // find hotel by id
  const findHotelById = (id) => {
    return hotels.find((hotel) => hotel._id === id);
  };

  useEffect(() => {
    const fakeDelay = setTimeout(updateHotels, 2000);
    return () => clearTimeout(fakeDelay);
  }, []);

  return (
    <HotelsContext.Provider
      value={{
        hotels,
        hotelsLoading,
        hotelsPages,
        hotelsCurrentPage,
        changeHotelsCurrentPage,
        findHotelById,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export { UseHotels };

export default HotelsProvider;
