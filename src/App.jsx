import { useState } from 'react';
import Login from './components/Login';
import TrackingPage from './components/TrackingPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleLogin = (number) => {
    setTrackingNumber(number);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setTrackingNumber('');
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <TrackingPage trackingNumber={trackingNumber} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App; 