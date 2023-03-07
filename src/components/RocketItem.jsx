import React from 'react';
import PropTypes from 'prop-types';
import '../styles/rockets.css';

const RocketItem = ({
  id, name, Image, description,
}) => (
  <div className="rocketItemCont">
    <img src={Image[0]} alt="" />
    <section id={id} className="rocket_details">
      <h2>{name }</h2>
      <p>
        {description}
      </p>
      <button type="submit">Reserve Rocket</button>
    </section>
  </div>
);

RocketItem.propTypes = { id: PropTypes.string.isRequired };
RocketItem.propTypes = { name: PropTypes.string.isRequired };
RocketItem.propTypes = { Image: PropTypes.string.isRequired };
RocketItem.propTypes = { description: PropTypes.string.isRequired };

export default RocketItem;
