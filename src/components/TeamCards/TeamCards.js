

function TeamCard({ team }) {
    console.log(team);
    return (
        <div>
            <h2>Name: {team.name} </h2>
        </div>
    );
}

export default TeamCard;