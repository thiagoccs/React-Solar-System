import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MissionCard extends Component {
  render() {
    const { info } = this.props;
    const { name, year, country, destination } = info;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  info: PropTypes.shape(
    {
      name: PropTypes.string,
      year: PropTypes.string,
      country: PropTypes.string,
      destination: PropTypes.string,
    },
  ).isRequired,
};
