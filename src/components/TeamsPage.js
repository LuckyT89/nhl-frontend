import TeamCard from "./TeamCards";


function HomePage({ teams }) {

    const teamCards = teams.map((team) => <TeamCard key={team.id} team={team} />);

    return (
        <div>
            Home page component

            { teamCards }
        </div>
    );
}

export default HomePage;