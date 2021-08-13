import TeamCard from "../TeamCards/TeamCards";


function HomePage({ teams }) {

    const teamCards = teams.map((team) => <TeamCard key={team.id} team={team} />);

    return (
        <div>
            Home component

            {teamCards}
        </div>
    );
}

export default HomePage;