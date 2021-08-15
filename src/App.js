import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

import TeamsPage from './components/TeamsPage';
import PlayersPage from './components/PlayersPage';


function App() {

  return (
    <div className="App">

      <div className="header">
        <Link className="home-link" to={`/`}><p className="home-link">Home</p></Link>
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

      <div className="footer">
        <p>Images from <a href="https://www.nhl.com/">NHL.com</a><span>|</span>Stats from <a href="https://www.hockey-reference.com/">Hockey Reference</a></p>
      </div>
    </div>
  );
}

export default App;
