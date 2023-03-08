import { useSelector } from 'react-redux';

const MyProfilePage = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);
  const { rocketItems } = useSelector((store) => store.rockets);
  const reserveRockets = rocketItems.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-section">
      <hr className="missions-divider" />
      <section className="profile-missions">
        <h1>My Missions</h1>
        <ul>
          {joinedMissions.length > 0 ? (
            joinedMissions.map((mission) => (
              <li key={mission.mission_id} className="profile-missions-item">
                {mission.mission_name}
              </li>
            ))
          ) : (
            <li>No joined missions.</li>
          )}
        </ul>
      </section>
      <section className="myRockets">
        <h2>My Rockets</h2>
        {reserveRockets.map((rockets) => (
          <li key={rockets.id}>
            {rockets.name}
          </li>
        ))}
      </section>
    </div>
  )
}

export default MyProfilePage;
