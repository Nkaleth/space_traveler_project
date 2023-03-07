import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketItems } from '../redux/rockets/rocketsSlice';

const RocketPage = () => {
  const { isLoading, rocketItems } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    console.log(rocketItems)
  );
};

export default RocketPage;
