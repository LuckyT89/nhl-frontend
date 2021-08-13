import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './components/HomePage/HomePage';


function App() {

  const baseURL = 'http://127.0.0.1:9393';

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/teams`)
      .then(res => res.json())
      .then(resTeams => {
        setTeams(resTeams);
      })
  }, []);




  return (
    <div className="App">
      <h1>NHL</h1>
      <HomePage teams={teams} />
    </div>
  );
}

export default App;
