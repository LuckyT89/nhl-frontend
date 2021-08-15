import { useState } from 'react';

function AddPlayerForm({ addPlayer, showForm }) {
    // Set starting state for input fields
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [position, setPosition] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    // Update state when fields are changed
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleNumberChange(e) {
        setNumber(e.target.value);
    }
    function handlePositionChange(e) {
        setPosition(e.target.value);
    }
    function handleAgeChange(e) {
        setAge(e.target.value);
    }
    function handleHeightChange(e) {
        setHeight(e.target.value);
    }
    function handleWeightChange(e) {
        setWeight(e.target.value);
    }
    function handleImageUrlChange(e) {
        setImageUrl(e.target.value);
    }



    function handleAddPlayer() {
        const player = {
            name: name,
            number: number,
            position: position,
            age: age,
            height: height,
            weight: weight,
            image_url: imageUrl,
            team_id: ""
        }

        addPlayer(player);
    }

    return (
        <div className={showForm? "show" : "hide"} >
            <form className="container">
                    <input className="form-control" placeholder="Name" onChange={handleNameChange} /><br />
                    <input className="form-control" placeholder="Number" onChange={handleNumberChange} /><br />
                    <input className="form-control" placeholder="Position" onChange={handlePositionChange} /><br />
                    <input className="form-control" placeholder="Age" onChange={handleAgeChange} /><br />
                    <input className="form-control" placeholder="Height" onChange={handleHeightChange} /><br />
                    <input className="form-control" placeholder="Weight" onChange={handleWeightChange} /><br />
                    <input className="form-control" placeholder="Image URL" onChange={handleImageUrlChange} /><br />
                    <button className="btn btn-primary" onClick={handleAddPlayer} >Add Player</button>
            </form>
        </div>
    );
}

export default AddPlayerForm;
