import { useSelector } from 'react-redux';

const MyProfilePage = () => {
  const { rocketItems } = useSelector((store) => store.rockets);
  const reserveRockets = rocketItems.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <hr />
      <section className="myRockets">
        <h2>My Rockets</h2>
        {reserveRockets.map((rockets) => (
          <li key={rockets.id}>
            {rockets.name }
          </li>
        ))}
      </section>
    </div>
  );
};

export default MyProfilePage;
