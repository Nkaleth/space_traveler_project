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
      <section className="profile-missions">
        <h1>My Rockets</h1>
        <ul>
          {reserveRockets.length > 0 ? (
            reserveRockets.map((rocket) => (
              <li key={rocket.id} className="profile-missions-item">
                {rocket.name}
              </li>
            ))
          ) : (
            <li>No rockets reserved.</li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default MyProfilePage;
