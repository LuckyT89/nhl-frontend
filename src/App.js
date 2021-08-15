import './App.css';
import { Route, Switch } from 'react-router-dom';

import TeamsPage from './components/TeamsPage';
import PlayersPage from './components/PlayersPage';


function App() {

  return (
    <div className="App">

      <div className="header">
        <img className="nhl-logo" src="http://media.heartlandtv.com/images/NHL+LOGO.jpg" alt="NHL"></img>
      </div>
      
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
