import React from 'react';
import PropTypes from 'prop-types';

export default function Rating(props) {
  const { rating } = props;
  return (
    <div className="rating">{ rating }</div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
}.isRequired;
