import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket } from '../redux/rockets/rocketsSlice';
import '../styles/rockets.css';

const RocketItem = ({
  id, name, Image, description, reserved,
}) => {
  const dispatch = useDispatch();
  if (!reserved) {
    return (
      <div className="rocketItemCont">
        <section className="rocketImgCont">
          <img src={Image[0]} alt="" />
        </section>
        <section id={id} className="rocket_details">
          <h2>{name }</h2>
          <p>
            {description}
          </p>
          <button className="reserveButton" type="button" value="Reserve Rocket" onClick={() => (dispatch(reserveRocket(id)))}>Reserve Rocket</button>
        </section>
      </div>
    );
  }
  return (
    <div className="rocketItemCont">
      <section className="rocketImgCont">
        <img src={Image[0]} alt="" />
      </section>
      <section id={id} className="rocket_details">
        <h2>{name }</h2>
        <p className="description">
          <span className="reservedTag">Reserved</span>
          {description}
        </p>
        <button className="cancelButton" type="button" value="Reserve Rocket" onClick={() => (dispatch(reserveRocket(id)))}>Cancel Reservation</button>
      </section>
    </div>
  );
};

RocketItem.propTypes = { id: PropTypes.string.isRequired };
RocketItem.propTypes = { name: PropTypes.string.isRequired };
RocketItem.propTypes = { Image: PropTypes.string.isRequired };
RocketItem.propTypes = { description: PropTypes.string.isRequired };
RocketItem.propTypes = { reserved: PropTypes.bool.isRequired };

export default RocketItem;
