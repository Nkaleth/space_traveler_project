import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({
  id, name, type, Images,
}) => (
  <div className="rocketItemCont">
    <h2>ROCKETs HERE!</h2>
    <h2>{name }</h2>
    <p>{id}</p>
    <p>
      {type}
    </p>
    <img src={Images[0]} alt="" />
  </div>
);

RocketItem.propTypes = { id: PropTypes.string.isRequired };
RocketItem.propTypes = { name: PropTypes.string.isRequired };
RocketItem.propTypes = { type: PropTypes.string.isRequired };
RocketItem.propTypes = { Images: PropTypes.string.isRequired };

export default RocketItem;
