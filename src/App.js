import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import TeamsPage from './components/TeamsPage';
import PlayersPage from './components/PlayersPage';


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
      <Switch>
      <Route exact path="/">
        <TeamsPage teams={teams} />
      </Route>

      <Route path="/players">
        <PlayersPage />
      </Route>
      
      </Switch>

    </div>
  );
}

export default App;
