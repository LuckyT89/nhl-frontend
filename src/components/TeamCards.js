import { Link } from "react-router-dom";

function TeamCard({ team }) {
    return (
        <div>
            <h2>{team.name}</h2>
            <Link to={`/players/${team.id}`}>
                <p>Go!</p>
            </Link>
        </div>
    );
}

export default TeamCard;