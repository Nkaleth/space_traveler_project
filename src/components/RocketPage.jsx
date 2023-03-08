import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketItems } from '../redux/rockets/rocketsSlice';
import RocketItem from './RocketItem';

const RocketPage = () => {
  const { isLoading, rocketItems } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rocketItems.length === 0) { dispatch(getRocketItems()); }
  });

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="rocketsAllItems">
      { rocketItems.map((item) => (
        <RocketItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          Image={item.flickr_images}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
};

export default RocketPage;
