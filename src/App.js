import './App.css';
import { Route, Switch } from 'react-router-dom';

import TeamsPage from './components/TeamsPage';
import PlayersPage from './components/PlayersPage';


function App() {

  return (
    <div className="App">
      <h1>NHL</h1>
      <Switch>
        <Route exact path="/">
          <TeamsPage />
        </Route>

        <Route path="/players/:id">
          <PlayersPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
