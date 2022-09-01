import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    // console.log(Planets);
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { Planets.map((planet, index) => <PlanetCard info={ planet } key={ index } />)}
      </div>
    );
  }
}
