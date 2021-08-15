import '../styles/PlayerCards.css';

function PlayerCard({ player, removePlayer, showDeleteBtn }) {

    function handleRemovePlayer() {
        removePlayer(player.id);
    }

    return (
        <div className="player-card">
            
            <h3> <img src={player.image_url} alt="Player" width="60" height="60"></img> #{player.number} {player.name}</h3>
            <p>Age: {player.age} Position: {player.position} Height: {player.height} Weight: {player.weight} <button className={showDeleteBtn ? "btn btn-danger show" : "btn btn-danger hide"} onClick={handleRemovePlayer} >Delete</button> </p>
            
        </div>
    );
}

export default PlayerCard;