import { useState } from 'react';

function AddPlayerForm({ addPlayer }) {
    // Set starting state for input fields
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    // Update state when fields are changed
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleNumberChange(e) {
        setNumber(e.target.value);
    }
    function handleHeightChange(e) {
        setHeight(e.target.value);
    }
    function handleWeightChange(e) {
        setWeight(e.target.value);
    }



    function handleAddPlayer() {
        const player = {
            name: name,
            number: number,
            height: height,
            weight: weight,
            image_url: "something.com",
            team_id: ""
        }

        addPlayer(player);
    }

    return (
        <div>
            <input placeholder="Name" onChange={handleNameChange} /><br />
            <input placeholder="Number" onChange={handleNumberChange} /><br />
            <input placeholder="Height" onChange={handleHeightChange} /><br />
            <input placeholder="Weight" onChange={handleWeightChange} /><br />
            <button onClick={handleAddPlayer} >Add Player</button>
        </div>
    );
}

export default AddPlayerForm;
