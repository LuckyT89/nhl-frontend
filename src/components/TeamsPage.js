import TeamCard from "./TeamCards";
import { useState, useEffect } from 'react';


function HomePage() {

    const baseURL = 'http://127.0.0.1:9393';

    // State starts as an empty array
    const [teams, setTeams] = useState([]);
  
    // Get a list of all teams. Update state so it now has an array of team objects. 
    useEffect(() => {
      fetch(`${baseURL}/teams`)
        .then(res => res.json())
        .then(resTeams => {
          setTeams(resTeams);
        })
    }, []);

    // Map over the array of team objects and make a TeamCard component for each one.
    const teamCards = teams.map((team) => <TeamCard key={team.id} team={team} />);

    return (
        <div className="teams-page container">
          <div className="row">
            { teamCards }
          </div>
        </div>
    );
}

export default HomePage;