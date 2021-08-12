import TeamCard from "../TeamCards/TeamCards";


function Home({ teams }) {

    const teamCards = teams.map((team) => <TeamCard key={team.id} team={team} />);

    return (
        <div>
            Home component

            {teamCards}
        </div>
    );
}

export default Home;