import TeamCard from "../TeamCards/TeamCards";


function Home({ teams }) {

    console.log(teams);

    return (
        <div>
            Home component

            <TeamCard team={teams[0]} />
            <TeamCard team={teams[1]} />
            <TeamCard team={teams[2]} />
        </div>
    );
}

export default Home;