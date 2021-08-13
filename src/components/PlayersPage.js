

function PlayersPage() {
    const pathName = window.location.pathname;
    const teamId = pathName.split('/')[2];
    console.log(teamId);

    return (
        <div>
            Players Page component
        </div>
    );
}

export default PlayersPage;
