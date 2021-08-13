

function PlayerCard({ player }) {
    return (
        <div>
            <h3>{player.name}</h3>
            <p>#{player.number} Height: {player.height} Weight: {player.weight} </p>
        </div>
    );
}

export default PlayerCard;