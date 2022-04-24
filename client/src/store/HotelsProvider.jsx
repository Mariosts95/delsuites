import { createContext, useContext, useState, useEffect } from 'react';

// Services
import { fetchHotels } from '../services/hotels';

// create context
const HotelsContext = createContext();

const UseHotels = () => useContext(HotelsContext);

const HotelsProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [hotelsLoading, setHotelsLoading] = useState(false);
  const [hotelsError, setHotelsError] = useState(null);
  const [hotelsCurrentPage, setHotelsCurrentPage] = useState(1);
  const [hotelsPerPage, setHotelsPerPage] = useState(30);

  // update hotels
  const updateHotels = async () => {
    setHotelsLoading(true);
    setHotelsError(null);

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

  useEffect(() => {
    updateHotels();
  }, []);

  return (
    <HotelsContext.Provider value={{ hotels, hotelsLoading, hotelsError }}>
      {children}
    </HotelsContext.Provider>
  );
};

export { UseHotels };

export default HotelsProvider;
