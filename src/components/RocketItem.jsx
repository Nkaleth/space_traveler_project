import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rocketsSlice';
import '../styles/rockets.css';

const RocketItem = ({
  id, name, Image, description,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rocketItemCont">
      <img src={Image[0]} alt="" />
      <section id={id} className="rocket_details">
        <h2>{name }</h2>
        <p>
          {description}
        </p>
        <button type="button" onClick={() => (dispatch(reserveRocket(id)))}>Reserve Rocket</button>
      </section>
    </div>
  );
};

RocketItem.propTypes = { id: PropTypes.string.isRequired };
RocketItem.propTypes = { name: PropTypes.string.isRequired };
RocketItem.propTypes = { Image: PropTypes.string.isRequired };
RocketItem.propTypes = { description: PropTypes.string.isRequired };

export default RocketItem;
