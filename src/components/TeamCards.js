import '../styles/TeamCards.css';
import { Link } from "react-router-dom";

function TeamCard({ team }) {
    return (
        <div className="team-card">
            <Link to={`/players/${team.id}`}>
                <img src={team.image_url} alt="Team logo" width="150" height="100"></img>
                <h2>{team.name}</h2>
            </Link>
        </div>
    );
}

export default TeamCard;