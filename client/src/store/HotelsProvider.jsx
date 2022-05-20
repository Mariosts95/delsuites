import { createContext, useContext, useState } from 'react';

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

  // update hotels
  const updateHotels = async () => {
    // second argument is hotels per page number, will change to state when pagination is completed, ref updateHotelsPages function
    fetchHotels(hotelsCurrentPage, 18).then(({ data }) => {
      setHotels(data);
      setHotelsLoading(false);
    });
  };

  const changeHotelsLoadingStatus = (status) => {
    setHotelsLoading(status);
  };

  // change hotels current page from pagination in hotels view
  const changeHotelsCurrentPage = (page) => {
    setHotelsCurrentPage(page);
  };

  // get hotel pages from db
  const updateHotelsPages = () => {
    fetchHotelsPages(18).then(({ data }) => {
      const pages = Math.ceil(data.hotelPages);
      setHotelsPages(pages);
    });
  };

  // find hotel by id
  const findHotelById = (id) => {
    return hotels.find((hotel) => hotel._id === id);
  };

  return (
    <HotelsContext.Provider
      value={{
        hotels,
        hotelsLoading,
        hotelsPages,
        hotelsCurrentPage,
        changeHotelsCurrentPage,
        findHotelById,
        updateHotels,
        changeHotelsLoadingStatus,
        updateHotelsPages,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export { UseHotels };

export default HotelsProvider;
