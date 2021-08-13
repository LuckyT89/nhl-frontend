

function AddPlayerForm({ addPlayer }) {

    function handleAddPlayer() {


        addPlayer();
    }

    return (
        <div>
            <input placeholder="Name" /><br />
            <input placeholder="Number" /><br />
            <input placeholder="Height" /><br />
            <input placeholder="Weight" /><br />
            <button onClick={handleAddPlayer} >Add Player</button>
        </div>
    );
}

export default AddPlayerForm;
