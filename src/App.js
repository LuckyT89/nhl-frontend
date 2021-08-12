import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home/Home';


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
      <h1>Hello, world!</h1>
      <Home teams={teams} />
    </div>
  );
}

export default App;
