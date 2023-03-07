import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missionsSlice';

const MissionsPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  useEffect(() => {
    if (missions.length > 0) {
      const selectedMissions = missions.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
      dispatch({ type: 'missions/selectedMissions', payload: selectedMissions });
    }
  }, [missions, dispatch]);

  return (
    <div>
      <h1>Missions Page</h1>
    </div>
  );
};

export default MissionsPage;
