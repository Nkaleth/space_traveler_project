import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, reserveMission } from '../redux/missionsSlice';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(reserveMission(missionId));
  };

  return (
    <div className="missions-section">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</td>
              <td><button type="button" onClick={() => handleJoinMission(mission.mission_id)}>{mission.reserved ? 'Leave Mission' : 'Join Mission'}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
