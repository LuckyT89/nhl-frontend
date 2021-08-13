import { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';

function PlayersPage() {
    // Find the team id from the URL
    const pathName = window.location.pathname;
    const teamId = pathName.split('/')[2];
    console.log(teamId);


    const baseURL = 'http://127.0.0.1:9393';

    const [players, setPlayers] = useState([]);
  
    useEffect(() => {
      fetch(`${baseURL}/players/${teamId}`)
        .then(res => res.json())
        .then(resPlayers => {
          setPlayers(resPlayers);
        })
    }, []);

    const playerCards = players.map((player) => <PlayerCard key={player.id} player={player} />);

    return (
        <div>
            Players Page component
            { playerCards }
        </div>
    );
}

export default PlayersPage;
