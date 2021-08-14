import { useState, useEffect } from 'react';
import AddPlayerForm from './AddPlayerForm';
import PlayerCard from './PlayerCard';

function PlayersPage() {
    // Find the team id from the URL
    const pathName = window.location.pathname;
    const teamId = pathName.split('/')[2];

    const baseURL = 'http://127.0.0.1:9393';

    // State starts as an empty array
    const [players, setPlayers] = useState([]);
  
    // Get a list of all players that match the team id from the url. Update state so it 
    // now has an array of player objects. 
    useEffect(() => {
      fetch(`${baseURL}/players/${teamId}`)
        .then(res => res.json())
        .then(resPlayers => {
          setPlayers(resPlayers);
        })
    }, [teamId]); // React console warning wanted teamId in the dependency array here even though it worked without it. 

    // Map over the array of player objects stored in state and make a PlayerCard component for each one.
    const playerCards = players.map((player) => <PlayerCard key={player.id} player={player} removePlayer={removePlayer} />);



    // Add a player to the backend when the form button is clicked and then show this 
    // change on the front end. 
    function addPlayer(player) {
        console.log('Added player!');

        player.team_id = teamId;
        
        console.log(player);

        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        };
      
        fetch(`${baseURL}/players`, config)
            .then(res => res.json())
            .then(player => setPlayers([...players, player]))
    }


    // Remove a player from the backend when the delete button on a card is clicked 
    // and then update the front end to show this change. 
    function removePlayer(playerId) {
        console.log('remove a player');
        console.log(playerId);

        fetch(`${baseURL}/players/${playerId}`, {method: 'DELETE'})
            .then(res => res.json())
            .then(() => setPlayers(players.filter(player => player.id !== playerId)))
    }



    return (
        <div>
            Players Page component
            <AddPlayerForm addPlayer={addPlayer}/>
            
            { playerCards }
        </div>
    );
}

export default PlayersPage;
