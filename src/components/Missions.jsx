import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, leaveMission, reserveMission } from '../redux/missions/missionsSlice';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  });

  const handleJoinMission = (missionId) => {
    dispatch(reserveMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <div className="missions-section">
      <hr className="missions-divider" />
      <table>
        <thead>
          <tr>
            <th className="table-head">Mission</th>
            <th className="table-head">Description</th>
            <th className="table-head">Status</th>
            <th className="table-head">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission-name">{mission.mission_name}</td>
              <td><p className="mission-description">{mission.description}</p></td>
              <td>
                {mission.reserved
                  ? <p className="status-badge status-badge-active">Active Member</p>
                  : <p className="status-badge status-badge-inactive">NOT A MEMBER</p>}
              </td>
              <td>
                {mission.reserved
                  ? (
                    <button type="button" onClick={() => handleLeaveMission(mission.mission_id)}>
                      Leave Mission
                    </button>
                  )
                  : (
                    <button type="button" onClick={() => handleJoinMission(mission.mission_id)}>
                      Join Mission
                    </button>
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
