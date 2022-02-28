import { useState } from 'react';

// @Material UI
import Button from '@mui/material/Button';

import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React + MUI!</p>
        <p>
          <Button
            variant='contained'
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
