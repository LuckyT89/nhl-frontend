

function PlayerCard({ player, removePlayer }) {

    function handleRemovePlayer() {
        removePlayer(player.id);
    }

    return (
        <div>
            <img src={player.image_url} alt="Player picture" width="60" height="60"></img>
            <h3>{player.name}</h3>
            <p>#{player.number} Height: {player.height} Weight: {player.weight} </p>
            <button onClick={handleRemovePlayer} >Delete</button>
        </div>
    );
}

export default PlayerCard;