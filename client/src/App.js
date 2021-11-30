import { useState } from 'react';
import './App.css';
import Header from './components/Header' 

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <Header loggedIn={loggedIn}/>
    </>
  );
}

export default App;
